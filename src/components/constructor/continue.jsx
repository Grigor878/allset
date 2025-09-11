import { useLocation, useParams, NavLink } from "react-router-dom";
import { useNuqs } from "../../hooks/useNuqs";
import { useQueryState } from "nuqs";
import { useTranslation } from "react-i18next";
import { getNextRoute } from "../../utils/helpers";
import { isContinueDisabled } from "../../utils/checkers";
import { Button } from "@chakra-ui/react";

export const Continue = () => {
  const [template] = useNuqs("template");
  const [palette] = useNuqs("palette");
  const [accept] = useQueryState("terms_accepted");

  const { t } = useTranslation();
  const { language } = useParams();
  const { pathname, search } = useLocation();

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
      {t("continue")} {t(name)}
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
      {t(name)}
    </Button>
  ) : (
    <Button
      as={!disabled ? NavLink : "button"}
      // to={!disabled ? path : undefined}
      to={!disabled ? `${path}${search}` : undefined}
      fontWeight="400"
      fontSize="14px"
      borderRadius="8px"
      bg="#F43F5E"
      disabled={disabled}
    >
      {t("continue")} {t(name)}
    </Button>
  );
};
