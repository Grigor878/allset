import { Scroll } from "../../components/scroll";
import Seo from "../../components/seo";
import { Box, Container, Flex } from "@chakra-ui/react";
import { useGetTanstack } from "../../hooks/useTanstack";
import { useNuqs } from "../../hooks/useNuqs";
import { Loader } from "../../components/loader";
import { Aside } from "../../components/constructor/aside";
import { Preview } from "../../components/constructor/preview";
import { useLanguage } from "../../hooks/useLanguge";

const Customisations = () => {
  const language = useLanguage();

  const { data } = useGetTanstack("templates");
  const [template] = useNuqs("template");

  const selectedTemplate = data?.find((item) => item.id === template) || [];

  if (!selectedTemplate) return <Loader />;

  return (
    <Scroll animationKey="customisations">
      <Box position={"relative"} pt="32px" pb="32px">
        <Seo title="choose_palette" description="select_palette" />
        <Container maxW="1104px" px={0}>
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
            <Preview />
          </Flex>
        </Container>
      </Box>
    </Scroll>
  );
};

export default Customisations;
