import { Center, Stack, Image, Heading, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { contentMap } from "../../utils/constants";
import { pathWithoutLang } from "../../utils/formatters";

export const TopPart = () => {
  const { pathname } = useLocation();

  const content = contentMap[pathWithoutLang(pathname)];

  if (!content) return;

  return (
    <Center pt="24px">
      <Stack gap="16px" align={"center"}>
        <Image w="64px" h="64px" src={content?.img} />
        <Heading fontWeight={"700"} size="3xl">
          {content?.title}
        </Heading>
        <Text color={"#4B5563"} w="672px" textStyle="lg" textAlign={"center"}>
          {content?.text}
        </Text>
      </Stack>
    </Center>
  );
};
