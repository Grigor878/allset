import { Box, Container, Stack } from "@chakra-ui/react";
import { Title } from "../../components/constructor/texts/title";

const Policy = () => {
  return (
    <Box pt="32px" pb="32px">
      <Container maxW="container.md">
        <Stack gap="16px" align={"center"}>
          <Title text="Privacy policy" />
        </Stack>
      </Container>
    </Box>
  );
};

export default Policy;
