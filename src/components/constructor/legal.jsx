import { useTranslation } from "react-i18next";
import { NavLink, useParams } from "react-router-dom";
import { useNuqs } from "../../hooks/useNuqs";
import { Checkbox, Link } from "@chakra-ui/react";

export const Legal = () => {
  const { t } = useTranslation();
  const { language } = useParams();

  const [accept, setAccept] = useNuqs("terms_accepted");

  const handleChange = (value) => {
    const checked =
      typeof value === "object" && "checked" in value ? value.checked : value;
    setAccept(checked);
  };

  return (
    <Checkbox.Root
      size="sm"
      colorPalette="pink"
      // defaultChecked={Boolean(accept)}
      defaultChecked={accept == "true" ? true : false}
      onCheckedChange={handleChange}
      // onCheckedChange={(e) => setAccept(!!e.accept)}
      // defaultChecked={accept}
      // onCheckedChange={setAccept}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label
        fontSize={"15px"}
        lineHeight={"24px"}
        fontWeight={"400"}
        pl={"8px"}
      >
        {t("legal_agree")}{" "}
        <Link
          as={NavLink}
          color={"#F43F5E"}
          to={`/${language}/terms-of-service`}
        >
          {t("terms_of_service")}
        </Link>{" "}
        {t("and")}
        <Link as={NavLink} color={"#F43F5E"} to={`/${language}/privacy-policy`}>
          {t("privacy_policy")}
        </Link>{" "}
        {t("legal_understand")}
      </Checkbox.Label>
    </Checkbox.Root>
  );
};
