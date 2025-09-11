import Seo from "../../components/seo";
import { Box, Container, Flex, For } from "@chakra-ui/react";
import { Card } from "../../components/constructor/card";
// import { templates } from "../../utils/constants";
import { useGetTanstack } from "../../hooks/useTanstack";
import { Loader } from "../../components/loader";

const Templates = () => {
  const { isLoading, data } = useGetTanstack("templates");
  console.log(data); //

  if (isLoading) return <Loader />;

  return (
    <Box>
      <Seo title="template_title" description="template_text" />
      <Container maxW="1104px" px={0}>
        <Flex justify={"space-between"} gap="32px" pt="32px" pb="32px">
          <For each={data}>{(el, index) => <Card key={index} el={el} />}</For>
        </Flex>
      </Container>
    </Box>
  );
};

export default Templates;
