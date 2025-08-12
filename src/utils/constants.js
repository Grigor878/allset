export const routes = [
  { path: "/", name: "Themes" },
  { path: "/customisations", name: "Customisations" },
  { path: "/details", name: "Details" },
  { path: "/preview", name: "Preview" },
  { path: "/confirm", name: "Confirm" },
];

import allset from '../assets/allset.png'
import details from '../assets/details.png'
import preview from '../assets/preview.png'
import confirm from '../assets/confirm.png'

export const contentMap = {
  "/": {
    title: "Choose Your Template",
    text: "Select a beautiful template that matches your wedding style. You can customize colors and content in the next steps.",
    img: allset,
  }
  ,
  "/details": {
    title: "Basic Wedding Information",
    text: "Let's start by gathering the essential details about your special day",
    img: details,
  },
  "/preview": {
    title: "Final Preview",
    text: "Here's how your wedding website will look to your guests",
    img: preview,
  },
  "/confirm": {
    title: "Final Confirmation",
    text: "Review your invitation details before publishing",
    img: confirm,
  },
};

import one from '../assets/template1.png'
import two from '../assets/template2.png'
import three from '../assets/template3.png'

export const templates = [
  {
    id: 1,
    img: one,
    bg: "rgba(250, 245, 255, 1)",
    name: "Classic Elegance",
    text: "Timeless and sophisticated design with rich colors and traditional typography. Perfect for formal ceremonies.",
    features: []
  },
  {
    id: 2,
    img: two,
    bg: "rgba(255, 241, 242, 1)",
    name: "Modern Romance",
    text: "Clean and contemporary design with soft colors and modern typography. Perfect for modern couples.",
    features: []
  },
  {
    id: 3,
    img: three,
    bg: "rgba(255, 251, 235, 1)",
    name: "Rustic Charm",
    text: "Warm and natural design with earthy colors and organic elements. Perfect for outdoor and rustic weddings.",
    features: []
  },
]
