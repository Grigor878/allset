import { t } from "i18next";
import { useState } from "react";
import { Field, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { BASE_URL } from "../../services/api/config";
import { Label } from "./texts/label";
import { LngSwitcher } from "./ui/lngSwitcher";
import { cleanUrlExtension } from "../../utils/formatters";

export const TitleCreator = ({ name, value, onChange, required, setForm }) => {
  const [activeLang, setActiveLang] = useState("hy");

  const handleInputChange = (e) => {
    const val = e.target.value;

    onChange(name, activeLang, val);

    if (activeLang === "en" && setForm) {
      setForm((prev) => ({
        ...prev,
        urlExtension: cleanUrlExtension(val),
      }));
    }
  };

  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
      gap="14px"
    >
      <Field.Root required={required} gap={"16px"}>
        <Field.Label as={Stack} alignItems={"flex-start"}>
          <Flex align={"center"} gap={"4px"}>
            <Field.RequiredIndicator fontSize="18px" />
            <Label text="invitation_title" />
          </Flex>
          <LngSwitcher activeLang={activeLang} setActiveLang={setActiveLang} />
        </Field.Label>
        <Input
          name={name}
          value={value?.[activeLang] ?? ""}
          onChange={handleInputChange}
          // onChange={(e) => onChange(name, activeLang, e.target.value)}
          placeholder={t("invitation_placeholder")}
          required
          variant="outline"
          borderRadius={"8px"}
        />
      </Field.Root>

      <Flex borderRadius={"4px"} p="12px" bg="#F9FAFB">
        <Text textStyle="sm" color={"#6B7280"}>
          {t("invitation_preview")} {BASE_URL}
        </Text>
        <Text textStyle="sm" color={"#E85A6B"}>
          {cleanUrlExtension(value?.["en"]) ?? ""}
        </Text>
      </Flex>
    </Stack>
  );
};
