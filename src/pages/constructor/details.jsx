import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Box, Container, Stack } from "@chakra-ui/react";
import { Expire } from "../../components/constructor/expire";
import { UrlCreator } from "../../components/constructor/ui/urlCreator";
import { Datepicker } from "../../components/constructor/ui/datepicker";
import { TextArea } from "../../components/constructor/ui/textarea";
import { error, success } from "../../components/alerts";
import { Photos } from "../../components/constructor/photos";
import { Counter } from "../../components/constructor/counter";
import { Info } from "../../components/constructor/info";
import { Dresscode } from "../../components/constructor/dresscode";
import { Story } from "../../components/constructor/story";
import { SharedLink } from "../../components/constructor/ui/sharedLink";

const Details = () => {
  const navigate = useNavigate();

  const { language } = useParams();

  const hiddenFieldsRef = useRef({});

  const [form, setForm] = useState({
    url: "",
    date: "",
    description: "",
    mainPhoto: [],
    participation: "",
    countdown: true,
    information: {
      name: "",
      phone: "",
      email: "",
    },
    dresscode: {
      description: "",
      style: "",
      scheme: "",
    },
    link: "",
    story: {
      about: "",
      imgs: [],
    },
  });
  console.log(form); //

  const handleHide = (key, hidden) => {
    setForm((prev) => {
      const updated = { ...prev };
      if (hidden) {
        hiddenFieldsRef.current[key] = updated[key];
        delete updated[key];
      } else {
        updated[key] = hiddenFieldsRef.current[key] ?? "";
        delete hiddenFieldsRef.current[key];
      }
      return updated;
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      success("Your message has been sent.");
    } catch (err) {
      error(`Error - ${err?.text}`);
    } finally {
      setForm({
        url: "",
        date: "",
        description: "",
        mainPhoto: [],
        participation: "",
        countdown: true,
        information: {
          name: "",
          phone: "",
          email: "",
        },
        dresscode: {
          description: "",
          style: "",
          scheme: "",
        },
        story: {
          about: "",
          imgs: [],
        },
      });
      navigate(`/${language}/preview`);
    }
  };

  return (
    <Box pt="32px" pb="65px">
      <Container maxW="container.md">
        {/* VStack */}
        <Stack gap="24px" w="864px" mx="auto">
          <Stack
            id="details"
            as="form"
            gap="24px"
            autoComplete="on"
            onSubmit={submit}
          >
            <UrlCreator
              value={form.url}
              onChange={handleChange}
              required={true}
            />
            <Datepicker
              value={form.date}
              onChange={handleChange}
              required={true}
            />
            <TextArea
              name="description"
              value={form.description}
              onChange={handleChange}
              required={true}
              text="Short Description"
            />
            <Photos
              onFileSelect={(file) =>
                setForm((prev) => ({ ...prev, mainPhoto: file }))
              }
              required={true}
            />
            <TextArea
              name="participation"
              value={form.participation}
              onChange={handleChange}
              hide={handleHide}
              required={false}
              text="Confirm Participation"
            />
            <Counter
              name="countdown"
              hide={handleHide}
              date={form.date}
              required={false}
            />
            <Info
              value={form.information}
              onChange={handleChange}
              required={false}
            />
            <Dresscode
              name="dresscode"
              value={form.dresscode}
              onChange={handleChange}
              hide={handleHide}
              required={false}
            />
            <SharedLink
              name="link"
              value={form.link}
              onChange={handleChange}
              hide={handleHide}
              required={false}
            />
            <Story
              name="story"
              value={form.story}
              onChange={handleChange}
              onFileSelect={(files) =>
                setForm((prev) => ({
                  ...prev,
                  story: {
                    ...prev.story,
                    imgs: files,
                  },
                }))
              }
              hide={handleHide}
              required={false}
            />
          </Stack>
          <Expire />
        </Stack>
      </Container>
    </Box>
  );
};

export default Details;
