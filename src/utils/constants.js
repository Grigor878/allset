export const locales = ["hy", "en", "ru"]

export const languages = [
  {
    code: "hy",
    flag: "am",
  },
  {
    code: "en",
    flag: "gb",
  },
  {
    code: "ru",
    flag: "ru",
  },
]

import { enUS, ru, hy } from "react-day-picker/locale";

export const calenarLocales = {
  en: enUS,
  hy: hy,
  ru: ru,
};

export const steps = {
  "/": 1,
  "/customisations": 1,
  "/details": 2,
  "/preview": 3,
  "/confirm": 4,
};

export const routes = [
  { path: "/", name: "Themes" },
  { path: "/customisations", name: "Customisations" },
  { path: "/details", name: "Details" },
  { path: "/preview", name: "Preview" },
  { path: "/confirm", name: "Confirm" },
  { path: "/payment", name: "Proceed to Payment" },
];

import allset from '../assets/allset.png'
import details from '../assets/details.png'
import preview from '../assets/preview.png'
import confirm from '../assets/confirm.png'

export const contentMap = {
  "/": {
    title: "template_title",
    text: "template_text",
    img: allset,
  },
  "/details": {
    title: "details_title",
    text: "details_text",
    img: details,
  },
  "/preview": {
    title: "preview_title",
    text: "preview_text",
    img: preview,
  },
  "/confirm": {
    title: "confirm_title",
    text: "confirm_text",
    img: confirm,
  },
};


import { Icon } from '@chakra-ui/react';
import { laptop, mobile, pc } from '../assets/svgs';

export const responsive = [
  {
    id: 1,
    name: "pc",
    icon: <Icon>{pc.icon}</Icon>
  },
  {
    id: 2,
    name: "mobile",
    icon: <Icon>{mobile.icon}</Icon>
  },
  {
    id: 3,
    name: "laptop",
    icon: <Icon>{laptop.icon}</Icon>
  }
]

export const styles = [
  { label: "Casual", value: "casual" },
  { label: "Formal", value: "formal" },
  { label: "Black Tie", value: "black_tie" },
]

export const schemes = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "Colorful", value: "colorful" },
]

export const detailsForm = {
  templateId: "",
  colorPaletteId: "",
  title: {
    hy: "",
    en: "",
    ru: ""
  },
  urlExtension: "",
  eventDate: "",
  description: {
    hy: "",
    en: "",
    ru: ""
  },
  mainImages: [],
  closingText: {
    hy: "",
    en: "",
    ru: ""
  },
  countDown: true,
  connectWithUs: {
    // description: "",
    name: "",
    phone: "",
    email: "",
  },
  dressCode: {
    description: {
      hy: "",
      en: "",
      ru: ""
    },
    style: "",
    colorPaletteId: "",
  },
  albumLink: "",
  ourStory: {
    text: {
      hy: "",
      en: "",
      ru: ""
    },
    photoUrls: [],
  },
}

import visa from "../assets/visa.png";
import idram from "../assets/idram.png";

export const paymentMethods = [
  {
    value: "visa",
    src: visa,
  },
  {
    value: "idram",
    src: idram,
  },
]

// templates page local data
// import one from '../assets/template1.png'
// import two from '../assets/template2.png'
// import three from '../assets/template3.png'

// export const templates = [
//   {
//     id: 1,
//     img: one,
//     bg: "rgba(250, 245, 255, 1)",
//     name: "Classic Elegance",
//     text: "Timeless and sophisticated design with rich colors and traditional typography. Perfect for formal ceremonies.",
//     features: []
//   },
//   {
//     id: 2,
//     img: two,
//     bg: "rgba(255, 241, 242, 1)",
//     name: "Modern Romance",
//     text: "Clean and contemporary design with soft colors and modern typography. Perfect for modern couples.",
//     features: []
//   },
//   {
//     id: 3,
//     img: three,
//     bg: "rgba(255, 251, 235, 1)",
//     name: "Rustic Charm",
//     text: "Warm and natural design with earthy colors and organic elements. Perfect for outdoor and rustic weddings.",
//     features: []
//   },
// ]
