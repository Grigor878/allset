import { useTranslation } from "react-i18next";
import { useLocation, useParams, NavLink } from "react-router-dom";
import { useNuqs } from "../../hooks/useNuqs";
import { getNextRoute } from "../../utils/helpers";
import { isContinueDisabled } from "../../utils/checkers";
import { Button } from "@chakra-ui/react";

export const Continue = () => {
  const [template] = useNuqs("template");
  const [palette] = useNuqs("palette");
  const [accept] = useNuqs("accept");
  
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { language } = useParams();

  const nextInfo = getNextRoute(pathname);

  if (!nextInfo) return null;

  const { path, name } = nextInfo;

  const disabled = isContinueDisabled(pathname, language, {
    template,
    palette,
  });

  const isDetailsPage = pathname === `/${language}/details`;
  const isConfirmPage = pathname === `/${language}/confirm`;

  return isDetailsPage ? (
    <Button
      // loading
      type="submit"
      form="details"
      fontWeight="400"
      fontSize="14px"
      borderRadius="8px"
      bg="#F43F5E"
      disabled={disabled}
    >
      {/* {hasMultipleWords(name) ? name : `Continue to ${name}`} */}
      {t("continue")} {name}
    </Button>
  ) : isConfirmPage ? (
    <Button
      // loading
      type="submit"
      form="confirm"
      fontWeight="400"
      fontSize="14px"
      borderRadius="8px"
      bg="#F43F5E"
      disabled={disabled && !(accept == true || accept === "true")}
    >
      {name}
    </Button>
  ) : (
    <Button
      as={!disabled ? NavLink : "button"}
      to={!disabled ? path : undefined}
      fontWeight="400"
      fontSize="14px"
      borderRadius="8px"
      bg="#F43F5E"
      disabled={disabled}
    >
      {t("continue")} {name}
    </Button>
  );
};
