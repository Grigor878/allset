import { useNuqs } from "../../hooks/useNuqs";
import { Box, Text, VStack, HStack, Stack } from "@chakra-ui/react";
import { MidText } from "./texts/midText";
import { SubText } from "./texts/subText";

export const Aside = ({ data, language }) => {
  const [palette, setPalette] = useNuqs("palette");

  return (
    <Box
      as="aside"
      w="320px"
      h="fit-content"
      bg="white"
      border="1px solid"
      borderRadius={"8px"}
      p={"25px"}
      borderColor={"#E5E7EB"}
    >
      <Stack gap={"8px"}>
        <MidText text="Choose Color Palette" />
        <SubText text="Select a color scheme that matches your wedding theme" />
      </Stack>
      <Stack gap={"16px"} pt="24px">
        {data?.palettes?.map((item) => {
          const isSelected = palette === item.id;

          return (
            <Box
              key={item.id}
              border="2px solid"
              borderColor={isSelected ? "#FBCFE8" : "#E5E7EB"}
              borderRadius="8px"
              bg={isSelected ? "#FDF2F8" : "white"}
              p="18px"
              transition=".3s ease"
              _hover={{
                borderColor: "#FBCFE8",
                cursor: "pointer",
              }}
              _focus={{
                borderColor: "#FBCFE8",
                outline: "none",
              }}
              tabIndex={0}
              onClick={() => setPalette(item.id)}
            >
              <HStack gap={"8px"} pb="12px">
                {item.colors.map((color) => (
                  <VStack key={color} spacing={1}>
                    <Box
                      w="32px"
                      h="32px"
                      borderRadius="50%"
                      bg={color}
                      border="1px solid #ccc"
                    />
                  </VStack>
                ))}
              </HStack>

              <Text fontWeight="bold">
                {item.name[language] || item.name.en}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {item.description[language] || item.description.en}
              </Text>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};
