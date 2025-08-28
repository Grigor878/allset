import { useTranslation } from "react-i18next";
import { Text } from "@chakra-ui/react";

export const SubTitle = ({ text }) => {
  const { t } = useTranslation();
  
  return (
    <Text color={"#4B5563"} w="672px" textStyle="lg" textAlign={"center"}>
      {t(text)}
    </Text>
  );
};
