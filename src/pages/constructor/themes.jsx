import { Box, Container, Flex, For } from "@chakra-ui/react";
import { Template } from "../../components/constructor/template";
import { templates } from "../../utils/constants";

const Themes = () => {
  return (
    <Box>
      <Container maxW="container.md">
        <Flex justify={"space-between"} gap="31px" pt="32px" pb="32px">
          <For each={templates}>{(el, index) => <Template key={index} el={el} />}</For>
        </Flex>
      </Container>
    </Box>
  );
};

export default Themes;
