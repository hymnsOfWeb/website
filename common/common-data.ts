import {
  BsEnvelope,
  BsInstagram,
  BsTelephone,
  BsWhatsapp,
} from "react-icons/bs";
import { BubbleDataProps } from "@components/contact-bubble/types";

//nav
export const mainNavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];
export interface WorkData {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
  img: {
    src: string;
    alt: string;
  };
  description: string;
}
export const workData: WorkData[] = [
  {
    title: "Dopegood",
    links: [
      { text: "Visit Live", url: "/" },
      { text: "Learn More", url: "/" },
    ],
    img: {
      src: "https://images4.alphacoders.com/133/thumbbig-1332018.webp",
      alt: "Dopegood",
    },
    description:
      "Maintained 100% job success rate on Upwork, delivering exceptional\
        designs and solutions for 40+ projects. Developed highly effective brand\
        identities and strategies for startups and small businesses based on market research and client feedback.",
  },
  {
    title: "Dopegood",
    links: [
      { text: "Visit Live", url: "/" },
      { text: "Learn More", url: "/" },
    ],
    img: {
      src: "https://images7.alphacoders.com/132/thumbbig-1325984.webp",
      alt: "Dopegood",
    },
    description:
      "Maintained 100% job success rate on Upwork, delivering exceptional\
        designs and solutions for 40+ projects. Developed highly effective brand\
        identities and strategies for startups and small businesses based on market research and client feedback.",
  },
  {
    title: "Dopegood",
    links: [
      { text: "Visit Live", url: "/" },
      { text: "Learn More", url: "/" },
    ],
    img: {
      src: "https://images2.alphacoders.com/132/thumbbig-1320348.webp",
      alt: "Dopegood",
    },
    description:
      "Maintained 100% job success rate on Upwork, delivering exceptional\
        designs and solutions for 40+ projects. Developed highly effective brand\
        identities and strategies for startups and small businesses based on market research and client feedback.",
  },
  {
    title: "Dopegood",
    links: [
      { text: "Visit Live", url: "/" },
      { text: "Learn More", url: "/" },
    ],
    img: {
      src: "https://images8.alphacoders.com/132/thumbbig-1329400.webp",
      alt: "Dopegood",
    },
    description:
      "Maintained 100% job success rate on Upwork, delivering exceptional\
        designs and solutions for 40+ projects. Developed highly effective brand\
        identities and strategies for startups and small businesses based on market research and client feedback.",
  },
  {
    title: "Dopegood",
    links: [
      { text: "Visit Live", url: "/" },
      { text: "Learn More", url: "/" },
    ],
    img: {
      src: "https://images6.alphacoders.com/132/thumbbig-1328670.webp",
      alt: "Dopegood",
    },
    description:
      "Maintained 100% job success rate on Upwork, delivering exceptional\
        designs and solutions for 40+ projects. Developed highly effective brand\
        identities and strategies for startups and small businesses based on market research and client feedback.",
  },
];

// home page
export const homeLandingTexts: [string, string] = [
  "Digital design &",
  "Branding studio",
];
export const aboutTextRibbon = {
  text: "About",
  count: 7,
};

export const phoneNumber = "+919415507316";
export const mail = "sing@hymnsofweb.com";
export const instaId = "hymnsofweb";

export const contactBubbleData: BubbleDataProps[] = [
  {
    href: `tel:${phoneNumber}`,
    title: "Phone",
    styles: {
      top: 27,
      left: 15,
      scale: 2,
    },
    icon: BsTelephone,
    text: phoneNumber,
  },
  {
    href: `mailto:${mail}`,
    title: "Mail",

    styles: {
      top: 80,
      left: 70,
      scale: 2.7,
    },
    icon: BsEnvelope,
    text: mail,
  },
  {
    href: `https://www.instagram.com/${instaId}`,
    title: "Instagram",

    styles: {
      top: 20,
      left: 72.5,
      scale: 2,
    },
    icon: BsInstagram,
    text: "@" + instaId,
  },
  {
    href: `https://wa.me/${phoneNumber}`,
    title: "WhatsApp",

    styles: {
      top: 75,
      left: 17.5,
      scale: 2,
    },
    icon: BsWhatsapp,
    text: phoneNumber,
  },
];
