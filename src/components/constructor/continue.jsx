import { useNuqs } from "../../hooks/useNuqs";
import { useLocation, useParams, NavLink } from "react-router-dom";
import { getNextRoute, hasMultipleWords } from "../../utils/helpers";
import { isContinueDisabled } from "../../utils/checkers";
import { Button } from "@chakra-ui/react";

export const Continue = () => {
  const [template] = useNuqs("template");
  const [palette] = useNuqs("palette");

  const { pathname } = useLocation();
  const { language } = useParams();

  // if (pathname === `/${language}/confirm`) return;

  const { path, name } = getNextRoute(pathname);

  const disabled = isContinueDisabled(pathname, language, {
    template,
    palette,
  });

  const isDetailsPage = pathname === `/${language}/details`;

  return isDetailsPage ? (
    <Button
      type="submit"
      form="details"
      fontWeight="400"
      fontSize="14px"
      borderRadius="8px"
      bg="#F43F5E"
      disabled={disabled}
    >
      {hasMultipleWords(name) ? name : `Continue to ${name}`}
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
      {hasMultipleWords(name) ? name : `Continue to ${name}`}
    </Button>
  );
};
