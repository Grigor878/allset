import {
  Field,
  FileUpload,
  Flex,
  Icon,
  Stack,
  Switch,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { story } from "../../assets/svgs";
import { Label } from "./texts/label";
import { FileUploadList } from "./ui/filleUpload";
import { useState } from "react";
import { LngSwitcher } from "./ui/lngSwitcher";

export const Story = ({ name, value, onChange, hide, required }) => {
  const [checked, setChecked] = useState(true);
  const [activeLang, setActiveLang] = useState("hy");

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
        <Field.Label
          as={Flex}
          w="100%"
          align={"start"}
          justify={"space-between"}
        >
          <Stack>
            <Flex align={"center"} gap={"4px"}>
              <Field.RequiredIndicator fontSize="18px" />
              <Label text={`Our Story (${activeLang.toUpperCase()})`} />
            </Flex>
            <LngSwitcher
              activeLang={activeLang}
              setActiveLang={setActiveLang}
            />
          </Stack>
          {!required && (
            <Switch.Root
              checked={checked}
              onCheckedChange={handleSwitchChange}
              size="lg"
              colorPalette="pink"
            >
              <Switch.HiddenInput />
              <Switch.Control />
            </Switch.Root>
          )}
        </Field.Label>
      </Field.Root>
      <Textarea
        h="114px"
        resize={"none"}
        name="text"
        value={value?.text?.[activeLang] ?? ""}
        onChange={(e) => handleNestedChange(e, activeLang)}
        disabled={!checked}
        placeholder="Tell your couple's story..."
      />
      <FileUpload.Root accept="image/*" maxFiles={5} disabled={!checked}>
        <FileUpload.HiddenInput />
        <FileUpload.Dropzone w="100%">
          <Icon>{story.icon}</Icon>
          <FileUpload.DropzoneContent>
            <Text textStyle="md">Click to upload or drag and drop</Text>
            <Text color="#9CA3AF">Upload 2-5 photos for your story</Text>
            {/* <Box color="fg.muted">.png, .jpg up to 5MB</Box> */}
          </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
        <FileUploadList onFileSelect={handleFileSelect} />
      </FileUpload.Root>
    </Stack>
  );
};
