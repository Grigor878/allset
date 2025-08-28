import { useTranslation } from "react-i18next";
import { Text } from "@chakra-ui/react";

export const SubText = ({ text, fs }) => {
  const { t } = useTranslation();

  return (
    <Text
      fontSize={fs ?? fs}
      fontWeight={400}
      color="#4B5563"
      lineHeight={"24px"}
      letterSpacing={0}
    >
      {t(text)}
    </Text>
  );
};
