import { Box, Button, Icon } from "@chakra-ui/react";
import { useLanguage } from "../../hooks/useLanguge";
import { useLocation, useNavigate } from "react-router-dom";
import { back } from "../../assets/svgs";
import { getPreviousRoute } from "../../utils/helpers";

export const GoBack = () => {
  const navigate = useNavigate();

  const language = useLanguage();
  
  const { pathname } = useLocation();

  if (pathname === `/${language}`) return <Box></Box>;

  const { name } = getPreviousRoute(pathname);

  return (
    <Button onClick={() => navigate(-1)} variant="plain" p="0" color="#4B5563">
      <Icon>{back.icon}</Icon>
      Back to {name}
    </Button>
  );
};
