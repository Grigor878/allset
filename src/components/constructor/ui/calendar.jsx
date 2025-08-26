import { useParams } from "react-router-dom";
import { Box, Dialog, Icon, Input, InputGroup, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { calendar } from "../../../assets/svgs";
import { formatDate } from "../../../utils/formatters";
import { currentYear, today } from "../../../utils/helpers";
import { calenarLocales } from "../../../utils/constants";
import { format } from "date-fns";

export const Calendar = ({ name, value, onChange, required }) => {
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
              placeholder="Choose date"
              required={required}
              onClick={() => setOpen(true)}
            />
          </InputGroup>
        </Dialog.Trigger>

        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content
            width="fit-content"
            background="white"
            padding={"25px"}
          >
            <Button
              onClick={() => setOpen(false)}
              variant="plain"
              position={"absolute"}
              top={0}
              right={0}
            >
              Close
            </Button>

            <Dialog.Body>
              <DayPicker
                locale={calenarLocales[language]}
                mode="single"
                selected={selected}
                fromYear={currentYear}
                toYear={currentYear + 5}
                disabled={{ before: today }}
                onSelect={handleSelect}
                // captionLayout="dropdown"
                navLayout="around"
              />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  );
};

