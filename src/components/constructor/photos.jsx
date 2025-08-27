import { t } from "i18next";
import { Field, FileUpload, Icon, Stack, Text } from "@chakra-ui/react";
import { uploadAvatar } from "../../assets/svgs";
import { Label } from "./texts/label";
import { FileUploadList } from "./ui/filleUpload";

export const Photos = ({ name, onChange, required }) => {
  const handleFileSelect = (files) => {
    onChange({
      target: {
        name,
        value: files ?? [],
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
        <Field.Label>
          <Field.RequiredIndicator />
          <Label text="photos_main" />
        </Field.Label>
      </Field.Root>
      <FileUpload.Root accept="image/*" maxFiles={1}>
        <FileUpload.HiddenInput />
        <FileUpload.Dropzone w="100%">
          <Icon>{uploadAvatar.icon}</Icon>
          <FileUpload.DropzoneContent>
            <Text textStyle="md">{t("photos_drag")}</Text>
            <Text color="#9CA3AF">{t("photos_rule")}</Text>
            {/* <Box color="fg.muted">.png, .jpg up to 5MB</Box> */}
          </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
        <FileUploadList onFileSelect={handleFileSelect} />
      </FileUpload.Root>
    </Stack>
  );
};
