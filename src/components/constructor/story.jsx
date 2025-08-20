import {
  Field,
  FileUpload,
  Flex,
  HStack,
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

export const Story = ({
  name,
  value,
  onChange,
  onFileSelect,
  hide,
  required,
}) => {
  const [checked, setChecked] = useState(true);

  const handleSwitchChange = (e) => {
    setChecked(e.checked);
    hide(name, !e.checked);
  };

  const handleNestedChange = (e) => {
    const { name, value: inputValue } = e.target;
    onChange({
      target: {
        name: "story",
        value: {
          ...value,
          [name]: inputValue,
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
          <HStack>
            <Field.RequiredIndicator />
            <Label text="Our Story" />
          </HStack>
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
        name="about"
        value={value?.about}
        onChange={handleNestedChange}
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
        <FileUploadList onFileSelect={onFileSelect} />
      </FileUpload.Root>
    </Stack>
  );
};
