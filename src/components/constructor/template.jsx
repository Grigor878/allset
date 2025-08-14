import { useLanguage } from "../../hooks/useLanguge";
import { useNuqs } from "../../hooks/useNuqs";
import { Box, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { MidText } from "./texts/midText";
import { SubText } from "./texts/subText";
import { selected } from "../../assets/svgs";
import { formatUrl } from "../../utils/formatters";
import { getLanguageKey } from "../../utils/helpers";

export const Template = ({ el }) => {
  const language = useLanguage();
  
  const { id, templateImage, name, description } = el;

  const [template, setTemplate] = useNuqs("template");

  const lng = getLanguageKey(language);
  const isSelected = template == id;

  return (
    <Stack
      bg="white"
      gap="24px"
      w="347px"
      h="608px"
      border={"2px solid"}
      borderColor={isSelected ? "#F43F5E" : "#E5E7EB"}
      borderRadius={"12px"}
      transition={".3s ease"}
      _hover={{
        borderColor: "#F43F5E",
        cursor: "pointer",
      }}
      _focus={{
        borderColor: "#F43F5E",
        outline: "none",
      }}
      tabIndex={0}
      onClick={() => setTemplate(id)}
    >
      {/* <Box bg={bg} borderTopRadius="12px"> */}
      <Box borderTopRadius="12px">
        <Image w="100%" h="272px" src={formatUrl(templateImage)} p="24px" />
      </Box>

      {isSelected && (
        <Flex
          w="fit-content"
          bg="#FCE7F3"
          align={"center"}
          gap="4px"
          mr="24px"
          ml="24px"
          p="4px 8px 4px 8px"
          borderRadius={"99px"}
        >
          <Icon>{selected.icon}</Icon>
          <Text fontSize={"11px"} color={"#9D174D"}>
            Selected
          </Text>
        </Flex>
      )}

      <Stack pr="24px" pl="24px" gap="8px">
        <MidText text={name[lng]} />
        <SubText text={description[lng]} />
      </Stack>
    </Stack>
  );
};
