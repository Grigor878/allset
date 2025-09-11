import Seo from "../../components/seo";
import { Box } from "@chakra-ui/react";

const Preview = () => {
  return (
    <Box maxW="1104px" px={0}>
      <Seo title="preview_title" description="preview_text" />
      preview
    </Box>
  );
};

export default Preview;
