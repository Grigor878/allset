import { Button, ButtonGroup, Image } from "@chakra-ui/react";
import { locales } from "../../../utils/constants";
import { getFlagCode } from "../../../utils/helpers";

export const LngSwitcher = ({ activeLang, setActiveLang }) => {
  return (
    <ButtonGroup size="sm"  variant="outline">
      {locales?.map((lng) => (
        <Button
          key={lng}
          onClick={() => setActiveLang(lng)}
          variant={activeLang === lng ? "subtle" : "ghost"}
        >
          <Image
            boxSize="24px"
            src={`https://flagcdn.com/${getFlagCode(lng)}.svg`}
            alt={lng}
            // borderRadius="sm"
          />
          {/* {lng?.toUpperCase()} */}
        </Button>
      ))}
    </ButtonGroup>
  );
};
