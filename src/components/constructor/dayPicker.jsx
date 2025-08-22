import { Box, Dialog, Icon, Input, InputGroup, Button } from "@chakra-ui/react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { calendar } from "../../assets/svgs";
import { formatDate } from "../../utils/formatters";
import { currentYear, today } from "../../utils/helpers";

export const DatePicker = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  //   const formatted = selected
  //     ? `${String(selected.getDate()).padStart(2, "0")}-${String(
  //         selected.getMonth() + 1
  //       ).padStart(2, "0")}-${selected.getFullYear()}`
  //     : "";

  const handleSelect = (date) => {
    setSelected(formatDate(date, "DD-MM-YYYY"));
    setOpen(false);
  };

  return (
    <Box>
      <Dialog.Root open={open} onOpenChange={setOpen} placement="center">
        <Dialog.Trigger asChild>
          <InputGroup startElement={<Icon>{calendar.icon}</Icon>}>
            <Input
              type="text"
              value={selected}
              readOnly
              placeholder="Choose date"
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
                mode="single"
                selected={selected}
                fromYear={currentYear}
                toYear={currentYear + 5}
                disabled={{ before: today }}
                onSelect={handleSelect}
                captionLayout="dropdown"
                navLayout="around"
              />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>

    // <Box position={"relative"}>
    //   <InputGroup startElement={<Icon>{calendar.icon}</Icon>}>
    //     <Input
    //       type="text"
    //       value={selected}
    //       readOnly
    //       placeholder="Choose date"
    //       onClick={() => setOpen(!open)}
    //     />
    //   </InputGroup>

    //   {open && (
    //     <Box
    //       style={{
    //         position: "absolute",
    //         zIndex: 1000,
    //         background: "white",
    //         boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    //       }}
    //     >
    //       <DayPicker
    //         navLayout="around"
    //         captionLayout="dropdown"
    //         animate
    //         mode="single"
    //         selected={selected}
    //         fromYear={currentYear}
    //         toYear={currentYear + 1}
    //         disabled={{ before: today }}
    //         onSelect={handleSelect}
    //         // footer={
    //         //   selected
    //         //     ? `Selected: ${selected.toLocaleDateString()}`
    //         //     : "Pick a day."
    //         // }
    //       />
    //     </Box>
    //   )}
    // </Box>
  );
};
