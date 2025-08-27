import { t } from "i18next";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Dialog, Icon, Input, InputGroup, Button } from "@chakra-ui/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { calendar } from "../../../assets/svgs";
import { formatDate } from "../../../utils/formatters";
import { currentYear, today } from "../../../utils/helpers";
import { calenarLocales } from "../../../utils/constants";
import { format } from "date-fns";
import useOutsideClick from "../../../hooks/useOutsideClick";

export const Calendar = ({ name, value, onChange, required }) => {
  const ref = useRef();

  const { language } = useParams();

  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (value) {
      const [day, month, year] = value.split("-").map(Number);
      setSelected(new Date(year, month - 1, day));
    } else {
      setSelected(null);
    }
  }, [value]);

  const handleSelect = (date) => {
    if (!date) return;
    setSelected(date);
    setOpen(false);

    onChange?.({
      target: {
        name,
        value: formatDate(date, "DD-MM-YYYY"),
      },
    });
  };

  // const formatted = selected ? formatDate(selected, "DD-MM-YYYY") : "";

  const formatted = selected
    ? format(selected, "EEEE, MMMM d, yyyy", {
        locale: calenarLocales[language],
      })
    : "";

  useOutsideClick(ref, open, setOpen);

  return (
    <Box>
      <Dialog.Root open={open} onOpenChange={setOpen} placement="center">
        <Dialog.Trigger asChild>
          <InputGroup startElement={<Icon>{calendar.icon}</Icon>}>
            <Input
              type="text"
              name={name}
              value={formatted}
              readOnly
              placeholder={t("choose_date")}
              required={required}
              onClick={() => setOpen(true)}
            />
          </InputGroup>
        </Dialog.Trigger>

        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content
            ref={ref}
            width="fit-content"
            background="white"
            padding={"25px"}
          >
            <Button
              onClick={() => setOpen(false)}
              variant="outline"
              position={"absolute"}
              top={"5px"}
              right={"5px"}
            >
              X
            </Button>

            <Dialog.Body>
              <DayPicker
                locale={calenarLocales[language]}
                mode="single"
                // captionLayout="dropdown"
                navLayout="around"
                selected={selected}
                // fromYear={currentYear}
                // toYear={currentYear + 5}
                defaultMonth={selected || today}
                startMonth={new Date(currentYear, 0)}
                endMonth={new Date(currentYear + 1, 11)}
                disabled={{ before: today }}
                onSelect={handleSelect}
              />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  );
};
