import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Seo from "../components/seo";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { info, success, warning } from "../components/alerts";
import soon from "../assets/soon.png";
import soonMobile from "../assets/soonMobile.png";
import { isValidEmail } from "../utils/checkers";

const Soon = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return info("Please enter your email address.");
    if (email && !isValidEmail(email)) return warning("Invalid email.");

    setLoading(true);

    const { error } = await supabase.from("newslater").insert([{ email }]);

    if (error) {
      warning(error.message || "Something went wrong. Try again.");
    } else {
      success(`Thank you! You will be notified.`);
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <Box
      bgImage={{ base: `url(${soonMobile})`, md: `url(${soon})` }}
      bgSize="cover"
      bgPosition="center center"
      bgRepeat="no-repeat"
      w="100vw"
      h="100vh"
    >
      <Seo
        title="Cooming Soon"
        description="Your dream wedding invitations — personalized, elegant, and effortless. Launching soon to make your big day unforgettable."
      />
      <Center h="100vh">
        <Stack align={"center"} gap={{ base: "42px", md: "52px" }}>
          <Heading
            as="h1"
            fontFamily={"Montaga"}
            fontWeight={400}
            fontSize={{ base: "42px", md: "76px" }}
            lineHeight={"24px"}
            letterSpacing={"0px"}
            color={"#4B5563"}
          >
            Coming Soon
          </Heading>

          <Text
            pt={{ md: "32px" }}
            textAlign={"center"}
            width={{ base: "297px", md: "643px" }}
            fontWeight={400}
            // fontSize={"18px"}
            fontSize={{ base: "12px", md: "18px" }}
            lineHeight={"24px"}
            letterSpacing={"0px"}
            color={"#4B5563"}
          >
            Your dream wedding invitations — personalized, elegant, and
            effortless.
            <br /> Launching soon to make your big day unforgettable.
          </Text>

          <Stack
            as="form"
            gap={{ base: "48px", md: "32px" }}
            onSubmit={handleSubmit}
          >
            <Input
              w="327px"
              h={{ base: "44px", md: "52px" }}
              placeholder="e-mail address"
              border={"2px solid #80A0A154"}
              borderRadius={"9px"}
              disabled={loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              fontSize={{ base: "12px", md: "18px" }}
              lineHeight={"24px"}
              letterSpacing={"0px"}
              borderRadius={"10px"}
              type="submit"
              h={{ base: "44px", md: "52px" }}
              bg="#004143"
              disabled={loading}
              loading={loading}
            >
              Notify Me
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
};

export default Soon;
