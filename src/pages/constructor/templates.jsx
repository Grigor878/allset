import { Box, Container, Flex, For } from "@chakra-ui/react";
import { Template } from "../../components/constructor/template";
// import { templates } from "../../utils/constants";
import { useTanstack } from "../../hooks/useTanstack";

const Templates = () => {
  const { isLoading, data, refetch } = useTanstack("templates");

  return (
    <Box>
      <Container maxW="container.md">
        <Flex justify={"space-between"} gap="32px" pt="32px" pb="32px">
          {/* <For each={templates}> */}
          <For each={data}>
            {(el, index) => <Template key={index} el={el} />}
          </For>
        </Flex>
      </Container>
    </Box>
  );
};

export default Templates;
