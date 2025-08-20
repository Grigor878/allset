import { Field, FileUpload, Icon, Stack, Text } from "@chakra-ui/react";
import { uploadAvatar } from "../../assets/svgs";
import { Label } from "./texts/label";
import { FileUploadList } from "./ui/filleUpload";

export const Photos = ({ onFileSelect, required }) => {
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
          <Label text="Main Photo/s" />
        </Field.Label>
      </Field.Root>
      <FileUpload.Root accept="image/*" maxFiles={1}>
        <FileUpload.HiddenInput />
        <FileUpload.Dropzone w="100%">
          <Icon>{uploadAvatar.icon}</Icon>
          <FileUpload.DropzoneContent>
            <Text textStyle="md">Click to upload or drag and drop</Text>
            <Text color="#9CA3AF">Single image (based on template)</Text>
            {/* <Box color="fg.muted">.png, .jpg up to 5MB</Box> */}
          </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
        <FileUploadList onFileSelect={onFileSelect} />
      </FileUpload.Root>
    </Stack>
  );
};
