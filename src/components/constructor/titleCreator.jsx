import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Field, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { BASE_URL } from "../../services/api/config";
import { Label } from "./texts/label";
import { LngSwitcher } from "./ui/lngSwitcher";
import { cleanUrlExtension } from "../../utils/formatters";

export const TitleCreator = ({
  name,
  value,
  onChange,
  setForm,
  required,
  languages,
}) => {
  const { t } = useTranslation();

  const [activeLang, setActiveLang] = useState("");

  useEffect(() => {
    languages?.length ? setActiveLang(languages[0]) : setActiveLang("");
  }, [languages]);

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
        {/* <Field.Label as={Stack} alignItems={"flex-start"}> */}
        <Field.Label as={Flex} w="100%" justifyContent={"space-between"}>
          <Flex align={"center"} gap={"4px"}>
            <Field.RequiredIndicator fontSize="18px" />
            <Label text="invitation_title" />
          </Flex>
          <LngSwitcher
            activeLang={activeLang}
            setActiveLang={setActiveLang}
            languages={languages}
          />
        </Field.Label>
        <Input
          name={name}
          value={value?.[activeLang] ?? ""}
          onChange={handleInputChange}
          placeholder={t("invitation_placeholder")}
          required
          variant="outline"
          borderRadius={"8px"}
          disabled={!activeLang}
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
