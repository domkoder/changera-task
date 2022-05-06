import { Stack, Skeleton } from '@chakra-ui/react';
function Loading() {
  return (
    <Stack borderRadius="10px" border="1px solid #d8dee4" p="4">
      <Skeleton height="20px" w="50%" />
      <Skeleton height="15px" />
      <Skeleton height="15px" />
      <Skeleton height="16px" />
      <Skeleton height="16px" w="70%" />
    </Stack>
  );
}

export default Loading;
