import { Button, ButtonGroup, Image } from "@chakra-ui/react";
import { locales } from "../../../utils/constants";
import { getFlagCode } from "../../../utils/helpers";

export const LngSwitcher = ({ activeLang, setActiveLang }) => {
  return (
    <ButtonGroup size="sm" variant="outline">
      {locales?.map((lng) => (
        <Button
          key={lng}
          onClick={() => setActiveLang(lng)}
          p="0"
          variant="plain"
          border={activeLang === lng ? "2px solid #111827" : "none"}
          borderRadius={activeLang === lng && "8px"}
          // variant={activeLang === lng ? "subtle" : "ghost"}
        >
          <Image
            src={`https://flagcdn.com/${getFlagCode(lng)}.svg`}
            boxSize="24px"
            borderRadius={"4px"}
            alt={lng}
            // borderRadius="sm"
          />
          {/* {lng?.toUpperCase()} */}
        </Button>
      ))}
    </ButtonGroup>
  );
};
