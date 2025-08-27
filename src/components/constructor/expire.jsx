import { t } from "i18next";
import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { attention } from "../../assets/svgs";

export const Expire = () => {
  return (
    <Flex
      p={"17px"}
      gap={"12px"}
      bg={"#FFFBEB"}
      border={"1px solid"}
      borderRadius={"8px"}
      borderColor={"#FDE68A"}
    >
      <Icon>{attention.icon}</Icon>

      <Stack>
        <Text fontWeight={"700"} lineHeight={"24px"} color={"#92400E"}>
          {t("expiry")}
        </Text>
        <Text fontSize={"12px"} lineHeight={"20px"} color={"#B45309"}>
          {t("expiry_desc")}
        </Text>
      </Stack>
    </Flex>
  );
};
