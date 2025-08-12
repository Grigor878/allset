import { Box, Container, Flex } from "@chakra-ui/react";
import { GoBack } from "./goBack";
import { Continue } from "./continue";

export const Footer = () => {
  return (
    <Box as="footer" w="100%" boxShadow="sm" pt="16px" pb="16px">
      <Container maxW="container.md">
        <Flex justify="space-between">
          <GoBack />
          <Continue />
        </Flex>
      </Container>
    </Box>
  );
};
