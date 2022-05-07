import { Box, SkeletonCircle, Stack, Skeleton } from '@chakra-ui/react';

function Loading() {
  return (
    <Box mt="-35px">
      <SkeletonCircle w="296px" h="296px" mb={4} />

      <Stack borderRadius="10px" border="1px solid #d8dee4" p="4" spacing={4}>
        <Skeleton height="20px" w="60%" my={2} />
        <Skeleton height="15px" />
        <Skeleton height="15px" />
        <Skeleton height="16px" />
        <Skeleton height="16px" />
        <Skeleton height="16px" />
      </Stack>
    </Box>
  );
}

export default Loading;
