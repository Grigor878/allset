import { Center, Stack, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { contentMap } from "../../utils/constants";
import { pathWithoutLang } from "../../utils/formatters";
import { Title } from "./texts/title";
import { SubTitle } from "./texts/subTitle";

export const TopPart = () => {
  const { pathname } = useLocation();

  const content = contentMap[pathWithoutLang(pathname)];

  if (!content) return;

  return (
    <Center pt="24px">
      <Stack gap="16px" align={"center"}>
        <Image w="64px" h="64px" src={content?.img} objectFit={"contain"}/>
        <Title text={content?.title} />
        <SubTitle text={content?.text} />
      </Stack>
    </Center>
  );
};
