import { Box, Button, Icon } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { back } from "../../assets/svgs";
import { getPreviousRoute } from "../../utils/helpers";

export const GoBack = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const backInfo = getPreviousRoute(pathname);

  if (!backInfo) return <Box></Box>;

  return (
    <Button onClick={() => navigate(-1)} variant="ghost" color="#4B5563">
      <Icon>{back.icon}</Icon>
      Back to {backInfo.name}
    </Button>
  );
};
