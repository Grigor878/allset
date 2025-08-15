import { Box, Button, Icon } from "@chakra-ui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { back } from "../../assets/svgs";
import { getPreviousRoute } from "../../utils/helpers";

export const GoBack = () => {
  const navigate = useNavigate();

  const { language } = useParams();
  const { pathname } = useLocation();

  if (pathname === `/${language}`) return <Box></Box>;

  const { name } = getPreviousRoute(pathname);

  return (
    <Button onClick={() => navigate(-1)} variant="ghost"  color="#4B5563">
      <Icon>{back.icon}</Icon>
      Back to {name}
    </Button>
  );
};
