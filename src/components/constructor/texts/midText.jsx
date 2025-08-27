import { t } from "i18next";
import { Text } from "@chakra-ui/react";

export const MidText = ({ text }) => {
  return (
    <Text textStyle="xl" fontWeight={700} lineHeight={"28px"} letterSpacing={0}>
      {t(text)}
    </Text>
  );
};
