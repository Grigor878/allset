import { Box, Container, Flex, For } from "@chakra-ui/react";
import { Card } from "../../components/constructor/card";
// import { templates } from "../../utils/constants";
import { useGetTanstack } from "../../hooks/useTanstack";
import { Loader } from "../../components/loader";

const Templates = () => {
  const { isLoading, data } = useGetTanstack("templates");

  if (isLoading) return <Loader />;

  return (
    <Box>
      <Container maxW="container.md">
        <Flex justify={"space-between"} gap="32px" pt="32px" pb="32px">
          <For each={data}>{(el, index) => <Card key={index} el={el} />}</For>
        </Flex>
      </Container>
    </Box>
  );
};

export default Templates;
