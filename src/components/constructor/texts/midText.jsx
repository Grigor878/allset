import { useTranslation } from "react-i18next";
import { Text } from "@chakra-ui/react";

export const MidText = ({ text }) => {
  const { t } = useTranslation();
  
  return (
    <Text textStyle="xl" fontWeight={700} lineHeight={"28px"} letterSpacing={0}>
      {t(text)}
    </Text>
  );
};
