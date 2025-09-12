import { Scroll } from "../../components/scroll";
import Seo from "../../components/seo";
import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Box, Container, Stack } from "@chakra-ui/react";
import { Expire } from "../../components/constructor/expire";
import { TitleCreator } from "../../components/constructor/titleCreator";
import { EventDate } from "../../components/constructor/eventDate";
import { TextArea } from "../../components/constructor/ui/textarea";
import { error, success } from "../../components/alerts";
import { Photos } from "../../components/constructor/photos";
import { Counter } from "../../components/constructor/counter";
import { Contact } from "../../components/constructor/contact";
import { Dresscode } from "../../components/constructor/dresscode";
import { Story } from "../../components/constructor/story";
import { AlbumLink } from "../../components/constructor/albumLink";
import { detailsForm } from "../../utils/constants";
import baseApi from "../../services/api/baseApi";
import { useNuqs } from "../../hooks/useNuqs";
import { LngSelector } from "../../components/constructor/lngSelector";
import { Timeline } from "../../components/constructor/timeline";

const Details = () => {
  const navigate = useNavigate();

  const { language } = useParams();

  const hiddenFieldsRef = useRef({});

  const [templateId] = useNuqs("template");
  const [colorPaletteId] = useNuqs("palette");

  const [form, setForm] = useState({
    ...detailsForm,
    templateId,
    colorPaletteId,
  });
  console.log(form); //

  const handleHide = (key, hidden) => {
    setForm((prev) => {
      const updated = { ...prev };
      if (hidden) {
        hiddenFieldsRef.current[key] = updated[key];
        delete updated[key];
      } else {
        updated[key] = hiddenFieldsRef.current[key] || "";
        delete hiddenFieldsRef.current[key];
      }
      return updated;
    });
  };

  // single language
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // for timeline updates (array)
  const handleTimelineChange = (newTimeline) => {
    setForm((prev) => ({
      ...prev,
      timeline: newTimeline,
    }));
  };

  // multy language
  const handleLngChange = (name, lang, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: {
        ...(prev[name] || { hy: "", ru: "", en: "" }),
        [lang]: value,
      },
    }));
    // setForm((prev) => {
    //   if (name === "urlExtension" && lang === null) {
    //     return { ...prev, [name]: value };
    //   }

    //   return {
    //     ...prev,
    //     [name]: {
    //       ...(prev[name] || { hy: "", ru: "", en: "" }),
    //       [lang]: value,
    //     },
    //   };
    // });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await baseApi.post(`/invitations`, form);

      if (data.status === "ok") {
        success("Basic Wedding Information Completed.");
        setForm(detailsForm);
        navigate(`/${language}/preview`);
      }
    } catch (err) {
      error(`Error - ${err}`);
    }
  };

  return (
    <Scroll animationKey="details">
      <Box pt="32px" pb="65px">
        <Seo title="details_title" description="details_text" />
        <Container maxW="1104px" px={0}>
          {/* VStack */}
          <Stack gap="24px" w="864px" mx="auto">
            <Stack
              id="details"
              as="form"
              gap="24px"
              autoComplete="on"
              onSubmit={submit}
            >
              <LngSelector
                name="languages"
                value={form.languages}
                onChange={handleChange}
                required={true}
              />
              <TitleCreator
                name="title"
                value={form.title}
                onChange={handleLngChange}
                setForm={setForm}
                required={true}
                languages={form.languages}
              />
              <EventDate
                name="eventDate"
                value={form.eventDate}
                onChange={handleChange}
                required={true}
              />
              <TextArea
                name="description"
                value={form.description}
                onChange={handleLngChange}
                required={true}
                text="description"
                placeholder="description_placeholder"
                languages={form.languages}
              />
              <Photos
                // onFileSelect={(file) =>
                //   setForm((prev) => ({ ...prev, mainImages: file }))
                // }
                name="mainImages"
                onChange={handleChange}
                required={true}
              />
              <TextArea
                name="closingText"
                value={form.closingText}
                onChange={handleLngChange}
                hide={handleHide}
                required={false}
                text="confirm_participation"
                placeholder="confirm_placeholder"
                languages={form.languages}
              />
              <Timeline
                name="timeline"
                value={form.timeline}
                hide={handleHide}
                onChange={handleTimelineChange}
                required={false}
              />
              <Counter
                name="countDown"
                value={form.eventDate}
                hide={handleHide}
                required={false}
              />
              <Contact
                name="connectWithUs"
                value={form.connectWithUs}
                onChange={handleChange}
                hide={handleHide}
                required={false}
              />
              <Dresscode
                name="dressCode"
                value={form.dressCode}
                onChange={handleChange}
                hide={handleHide}
                required={false}
                languages={form.languages}
              />
              <AlbumLink
                name="albumLink"
                value={form.albumLink}
                onChange={handleChange}
                hide={handleHide}
                required={false}
              />
              <Story
                name="ourStory"
                value={form.ourStory}
                onChange={handleChange}
                // onFileSelect={(files) =>
                //   setForm((prev) => ({
                //     ...prev,
                //     ourStory: {
                //       ...prev.ourStory,
                //       photoUrls: files,
                //     },
                //   }))
                // }
                hide={handleHide}
                required={false}
                languages={form.languages}
              />
            </Stack>
            <Expire />
          </Stack>
        </Container>
      </Box>
    </Scroll>
  );
};

export default Details;
