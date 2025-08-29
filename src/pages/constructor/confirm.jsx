import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Stack } from "@chakra-ui/react";
import { success, error } from "../../components/alerts";
import baseApi from "../../services/api/baseApi";
import { Promocode } from "../../components/constructor/promocode";
import { TitleDemo } from "../../components/constructor/titleDemo";
import { ConfirmDate } from "../../components/constructor/confirmDate";
import { Legal } from "../../components/constructor/legal";
import { Payment } from "../../components/constructor/payment";

const Confirm = () => {
  const navigate = useNavigate();

  const { language } = useParams();

  const [form, setForm] = useState();

  const submit = async (e) => {
    e.preventDefault();
    try {
      alert(159);
      const { data } = await baseApi.post(`/invitations`, form);

      if (data.status === "ok") {
        success("Basic Wedding Information Completed.");
        setForm();
        navigate(`/${language}/payment`);
      }
    } catch (err) {
      error(`Error - ${err}`);
    }
  };

  return (
    <Box pt="32px" pb="40px">
      <Container maxW="1104px" px={0}>
        <Stack gap="24px" w="864px" mx="auto">
          <Stack
            id="confirm"
            as="form"
            gap="24px"
            autoComplete="on"
            onSubmit={submit}
          >
            <TitleDemo />
            <ConfirmDate />
          </Stack>
          <Promocode />
          <Legal />
          <Payment />
        </Stack>
      </Container>
    </Box>
  );
};

export default Confirm;
