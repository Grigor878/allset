import { Box, Container, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import { useTanstack } from "../../hooks/useTanstack";
import { useNuqs } from "../../hooks/useNuqs";
import { Loader } from "../../components/loader";
import { Aside } from "../../components/constructor/aside";
import { useLanguage } from "../../hooks/useLanguge";

const Customisations = () => {
  const language = useLanguage();

  const { data } = useTanstack("templates");
  const [template] = useNuqs("template");

  const selectedTemplate = data?.find((item) => item.id === template) || [];

  if (!selectedTemplate) return <Loader />;

  return (
    <Box position={"relative"} minH={"100%"} h="100%" pt="32px" pb="32px">
      <Container maxW="container.md">
        <Flex gap={"24px"}>
          {/* <Box flex="1">
            <Text fontSize="2xl" fontWeight="bold">
              {selectedTemplate.name[language] || selectedTemplate.name.en}
            </Text>
            <Text mt={2}>
              {selectedTemplate.description[language] ||
                selectedTemplate.description.en}
            </Text>
          </Box> */}

          <Aside data={selectedTemplate} language={language} />
        </Flex>
      </Container>
    </Box>
  );
};

export default Customisations;
