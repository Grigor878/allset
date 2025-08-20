import { useEffect } from "react";
import { FileUpload, Float, useFileUploadContext } from "@chakra-ui/react";
import { remove } from "../../../assets/svgs";

export const FileUploadList = ({ onFileSelect }) => {
  const fileUpload = useFileUploadContext();
  const files = fileUpload.acceptedFiles;

 useEffect(() => {
    if (files.length > 0) {
      const readers = files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      Promise.all(readers).then((base64Files) => {
        onFileSelect(base64Files);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  if (files.length === 0) return null;

  return (
    <FileUpload.ItemGroup w="100%">
      {files.map((file) => (
        <FileUpload.Item
          w="fit-content"
          h="100%"
          file={file}
          key={file.name}
        >
          <FileUpload.ItemPreviewImage />
          <Float placement="top-end">
            <FileUpload.ItemDeleteTrigger
              w="100%"
              textAlign="center"
              layerStyle="fill.solid"
              bg={"none"}
              onClick={() => onFileSelect([])}
            >
              {remove.icon}
            </FileUpload.ItemDeleteTrigger>
          </Float>
        </FileUpload.Item>
      ))}
    </FileUpload.ItemGroup>
  );
};
