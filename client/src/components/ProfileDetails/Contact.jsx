import { ListItem, ListIcon } from '@chakra-ui/react';

function Contact({ Icon, title }) {
  return (
    <>
      {title ? (
        <ListItem>
          <ListIcon as={Icon} fill="#57606a" />
          {title}
        </ListItem>
      ) : null}
    </>
  );
}

export default Contact;
