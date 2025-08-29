import { Box, Container, Stack } from "@chakra-ui/react";
import { Title } from "../../components/constructor/texts/title";

const Terms = () => {
  return (
    <Box pt="32px" pb="32px">
      <Container maxW="1104px" px={0}>
        <Stack gap="16px" align={"center"}>
          <Title text="terms_of_service" />
        </Stack>
      </Container>
    </Box>
  );
};

export default Terms;
