import { Box, Button, Icon } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { back } from "../../assets/svgs";
import { getPreviousRoute } from "../../utils/helpers";

export const GoBack = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  if (pathname === "/") return <Box></Box>;

  const { name } = getPreviousRoute(pathname);

  return (
    <Button onClick={() => navigate(-1)} variant="plain" p="0">
      <Icon>{back.icon}</Icon>
      Back to {name}
    </Button>
  );
};
