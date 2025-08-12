import { Box, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { useQueryState } from "nuqs";
import { selected } from "../../assets/svgs";

export const Template = ({ el }) => {
  const { id, img, bg, name, text, features } = el;

  const [template, setTemplate] = useQueryState("template");

  const isSelected = template == id;

  return (
    <Stack
      onClick={() => setTemplate(id || null)}
      gap="24px"
      w="347px"
      h="608px"
      border={"2px solid"}
      borderColor={isSelected ? "#F43F5E" : "#E5E7EB"}
      borderRadius={"12px"}
      transition={".3s ease"}
      _hover={{
        // border: "2px solid #F43F5E",
        boxShadow: "0 0 0 2px rgba(244, 63, 94, 0.4)",

        cursor: "pointer",
      }}
      _focus={{
        border: "2px solid #F43F5E",
        outline: "none",
      }}
      tabIndex={0}
    >
      <Box bg={bg} borderTopRadius="12px">
        <Image src={img} p="24px" />
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
        <Heading fontWeight={700}>{name}</Heading>
        <Text fontWeight={400} color="#4B5563">
          {text}
        </Text>
      </Stack>
    </Stack>
  );
};
