import { useTranslation } from "react-i18next";
import { Field, Flex, Icon, Input, Stack, Text } from "@chakra-ui/react";
import { Label } from "./texts/label";
import { info, url } from "../../assets/svgs";
import { BASE_URL } from "../../services/api/config";

export const TitleDemo = () => {
  const { t } = useTranslation();
  
  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
    >
      <Field.Root gap="12px">
        <Field.Label gap="16px">
          <Icon>{url.icon}</Icon>
          <Label text="invitation_url" />
        </Field.Label>

        <Stack w="100%" gap="12px" pl="40px">
          <Input
            type="text"
            name="name"
            value={BASE_URL + "es_du"}
            variant="subtle"
            h="62px"
            border={"1px solid"}
            borderColor={"#D1D5DB"}
            borderRadius="8px"
            disabled={true}
          />
          <Text as={Flex} gap="8px" alignItems={"center"} color={"#D97706"}>
            <Icon>{info.icon}</Icon>
            {t("not_active")}
          </Text>
        </Stack>
      </Field.Root>
    </Stack>
  );
};
