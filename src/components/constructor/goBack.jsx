import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { getPreviousRoute } from "../../utils/helpers";
import { Box, Button, Icon } from "@chakra-ui/react";
import { back } from "../../assets/svgs";

export const GoBack = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const { pathname } = useLocation();

  const backInfo = getPreviousRoute(pathname);

  if (!backInfo) return <Box></Box>;

  return (
    <Button onClick={() => navigate(-1)} variant="ghost" color="#4B5563">
      <Icon>{back.icon}</Icon>
      {t("back")} {t(backInfo?.name)}
    </Button>
  );
};
