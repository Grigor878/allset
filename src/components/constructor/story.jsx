import { useTranslation } from "react-i18next";
import {
  Field,
  FileUpload,
  Flex,
  Icon,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { story } from "../../assets/svgs";
import { Label } from "./texts/label";
import { FileUploadList } from "./ui/filleUpload";
import { useEffect, useState } from "react";
import { LngSwitcher } from "./ui/lngSwitcher";
import { Switcher } from "./ui/switcher";

export const Story = ({ name, value, onChange, hide, required, languages }) => {
  const { t } = useTranslation();

  const [checked, setChecked] = useState(true);
  const [activeLang, setActiveLang] = useState("");

  useEffect(() => {
    languages?.length ? setActiveLang(languages[0]) : setActiveLang("");
  }, [languages]);

  const handleSwitchChange = (e) => {
    setChecked(e.checked);
    hide(name, !e.checked);
  };

  const handleNestedChange = (e, lang) => {
    onChange({
      target: {
        name: name,
        value: {
          ...value,
          text: {
            ...value?.text,
            [lang]: e.target.value,
          },
        },
      },
    });
  };

  const handleFileSelect = (files) => {
    onChange({
      target: {
        name,
        value: {
          ...value,
          photoUrls: files,
        },
      },
    });
  };

  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
      gap="16px"
    >
      <Field.Root required={required}>
        <Field.Label as={Flex} w="100%" justify={"space-between"}>
          <Flex align={"center"} gap={"4px"}>
            <Field.RequiredIndicator fontSize="18px" />
            <Label text="story" />
          </Flex>
          <Flex gap={"25px"}>
            <LngSwitcher
              activeLang={activeLang}
              setActiveLang={setActiveLang}
              languages={languages}
            />
            {!required && (
              <Switcher checked={checked} onChange={handleSwitchChange} />
            )}
          </Flex>
        </Field.Label>
      </Field.Root>
      <Textarea
        h="114px"
        resize={"none"}
        name="text"
        value={value?.text?.[activeLang] ?? ""}
        onChange={(e) => handleNestedChange(e, activeLang)}
        disabled={!checked || !activeLang}
        placeholder={t("story_placeholder")}
      />
      <FileUpload.Root accept="image/*" maxFiles={5} disabled={!checked}>
        <FileUpload.HiddenInput />
        <FileUpload.Dropzone w="100%">
          <Icon>{story.icon}</Icon>
          <FileUpload.DropzoneContent>
            <Text textStyle="md">{t("photos_drag")}</Text>
            <Text color="#9CA3AF">{t("photos_rule2")}</Text>
          </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
        <FileUploadList onFileSelect={handleFileSelect} />
      </FileUpload.Root>
    </Stack>
  );
};
