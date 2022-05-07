require('dotenv').config()
const express = require('express')
const _ = require('lodash')
const axios = require('axios')
const querystring = require('querystring')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const store = require('store2')

const port = process.env.PORT || 5000
const github_client_id = process.env.GITHUB_CLIENT_ID
const github_client_secret = process.env.GITHUB_CLIENT_SECRET
const cookie_name = process.env.COOKIE_NAME
const secret = process.env.COOKIE_NAME

const app = express()

app.use(
	cors({
		origin: true,
		credentials: true,
	})
)

app.use(cookieParser())

app.set('trust proxy', 1)

const getGitHubUser = async (code) => {
	const githubToken = await axios
		.post(
			`https://github.com/login/oauth/access_token?client_id=${github_client_id}&client_secret=${github_client_secret}&code=${code}`,
			{ withCredentials: true, credentials: 'include' }
		)
		.then((res) => res.data)
		.catch((error) => {
			throw error
		})

	const decoded = querystring.parse(githubToken)

	const accessToken = decoded.access_token

	return axios
		.get('https://api.github.com/user', {
			headers: { Authorization: `Bearer ${accessToken}` },
		})
		.then((res) => res.data)
		.catch((error) => {
			throw error
		})
}

app.get('/api/auth/github', async (req, res) => {
	const code = _.get(req, 'query.code')
	const path = _.get(req, 'query.code', '/')
	if (!code) {
		throw new Error('No code!')
	}
	const gitHubUser = await getGitHubUser(code)
	const token = jwt.sign(gitHubUser, secret)
	console.log('working just fine1######################:', token)

	store(cookie_name, token)

	console.log('working just fine1######################:', token)

	res.redirect(
		`https://6275bfbb098bd10b7edbac7b--curious-beijinho-734ea2.netlify.app`
	)
})

app.get('/', (req, res) => {
	return res.send('working just fine')
})

app.get('/api/me', (req, res) => {
	const cookie = store(cookie_name)

	try {
		const decode = jwt.verify(cookie, secret)
		return res.send(decode)
	} catch (error) {
		throw error
	}
})

app.listen(port, () => console.log(`Server started on port ${port}`))
