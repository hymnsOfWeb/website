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
  { name: "Work", href: "/#work" },
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

export const consoleMessage = `
⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠙⠻⡷
⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⡘⠓⣶⡄⠁
⢀⢀⢀⢀⣀⣀⣤⣤⣾⣏⣿⣿⡆
⢀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⠏⣷⣦⡀
⢀⣠⣿⣿⣿⣿⣿⣿⣿⡿⠿⢿⣿⢿⠇
⢰⣿⣿⣿⣿⣿⣿⣿⡋⢀⣠⣦⠰⣶⡩⣥
⠻⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⡇⢀⠈⠵⠋
⢀⢀⢀⢀⣿⣿⣿⣿⣿⣿⣿
⢀⢀⢀⢀⣿⣿⣿⣿⣿⣿⡏
⢀⢀⢀⢸⣶⣶⣶⣬⣥⣴⣦
⢀⢀⢀⢸⣿⣿⣿⣿⣿⣿⡟
⢀⢀⢀⢀⣿⣿⣿⢿⣿⣿⡇
⢀⢀⢀⢀⢻⣿⣿⢸⣿⡿⠁
⢀⢀⢀⢀⢸⣿⡿⢺⣿⡇
⢀⢀⢀⢀⢀⢻⡗⣼⣿⡇
⢀⢀⢀⢀⢀⢀⣿⣿⡟
⢀⢀⢀⢀⢀⢀⠘⠙⠁
⢀⢀⢀⢀⢀⢀⢂⣢
⢀⢀⢀⢀⢀⢀⠘⣿⡇
Haan🥰 din😘 vichon😝 tere🤓 layi🤡 time😏\
kadh☺ ke🤭 Karda😈 main🥴 promise😪 milan😳 aaunga🥵 Mainu🥶\
pata🥺 ae🤬 tu🤯 fan🥳 Salman🧐 Khan😇 di😚 Ohde😜\
gaane🤪 gaake😵 tainu😲 main😴 sunauga
`;

// home page
export const homePageMeta = {
  title: "Hymns of Web | Home Page",
  description: "Hymns of Web | web design and development studio",
};

export const aboutPageMeta = {
  title: "Hymns of Web | About Page",
  description: "Hymns of Web | web design and development studio",
};

export const contactPageMeta = {
  title: "Hymns of Web | Contact Page",
  description: "Hymns of Web | web design and development studio",
};

export const homeLandingTexts: [string, string] = [
  "Digital design &",
  "Branding studio",
];

export const homeAboutTextRibbon = {
  text: "About",
  count: 7,
};

export const homeAboutCard = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, \
consequatur commodi! Quo consectetur illo debitis quia repellendus quisquam, odit aperiam!",
  href: "/about",
  buttonText: "About Us",
  img: {
    src: "/assets/images/about-bg.png",
    alt: "About",
  },
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

export const contactPageData = [
  {
    icon: BsInstagram,
    title: "DM Us",
    href: `https://www.instagram.com/${instaId}`,
    text: "@" + instaId,
  },
  {
    icon: BsTelephone,
    title: "Call Us",
    href: `tel:${phoneNumber}`,
    text: phoneNumber,
  },
  {
    icon: BsWhatsapp,
    title: "Message Us",
    href: `https://wa.me/${phoneNumber}`,
    text: phoneNumber,
  },
  {
    icon: BsEnvelope,
    title: "Mail Us",
    href: `mailto:${mail}`,
    text: mail,
  },
];

export const aboutPageHeading =
  "We believe in an architecture that dialogs with its surrounding\
  while challenging its status quo, radical in its conceptual\
  ideals and ecological in its principle.";

export const aboutDescription =
  "Studio Beltrame has a long tradition in alpine architecture,\
  founded by Claudio in 1978 in the mountains of Tarvisio.\
  When you grow up in such a small and beautiful location,\
  surrounded by large forests and idyllic lakes, passion for\
  nature, plants and ecological material comes natural.\
  Our aim is to bring this passion into our design and at every\
  scale. The challenges that our industry is facing and causing\
  are stronger now than in 1978 and therefore, since Luca joined\
  in 2013, we are even more convinced about the urgency of a diverse\
  way of making architecture. A way that pursues regenerative principles,\
  challenges construction in unconventional ways and designs flexible spaces\
  for ever changing futures.";

export const aboutServices = [
  {
    title: "Websites",
    description:
      "We believe in an architecture that dialogs with its surrounding\
  while challenging its status quo, radical in its conceptual\
  ideals and ecological in its principle.",
  },
  {
    title: "Web Apps",
    description:
      "We believe in an architecture that dialogs with its surrounding\
  while challenging its status quo, radical in its conceptual\
  ideals and ecological in its principle.",
  },
  {
    title: "Desktop Apps",
    description:
      "We believe in an architecture that dialogs with its surrounding\
  while challenging its status quo, radical in its conceptual\
  ideals and ecological in its principle.",
  },
  {
    title: "Mobile Apps",
    description:
      "We believe in an architecture that dialogs with its surrounding\
  while challenging its status quo, radical in its conceptual\
  ideals and ecological in its principle.",
  },
];

export const teamData = [
  {
    name: "Gobind Singh",
    about: "Demon Lord",
    imgSrc: "/assets/images/gobind.webp",
    portfolioLink: "https://youtu.be/dQw4w9WgXcQ?t=43",
  },
  {
    name: "Sai Rohit",
    about: ".childNodes[0] Enjoyer",
    imgSrc: "/assets/images/sai.webp",
    portfolioLink:
      "https://www.linkedin.com/in/sai-rohit-sanniboyina-7a93aa224/",
  },

  {
    name: "Aishwarya Tewari",
    about: "Developer",
    imgSrc: "/assets/images/aishwarya.webp",
    portfolioLink: "https://aishwarya.hymnsofweb.com/",
  },
  {
    name: "Abhas Chatterjee",
    about: "Developer",
    imgSrc: "/assets/images/abhas.webp",
    portfolioLink: "https://abhas.hymnsofweb.com/",
  },
  {
    name: "Satyam Sinha",
    about: "Designer",
    imgSrc: "/assets/images/satyam.webp",
    portfolioLink: "https://www.linkedin.com/in/satyam-sinha-922117133/",
  },
  {
    name: "Pranav Manchanda",
    about: "Designer",
    imgSrc: "/assets/images/pranav.webp",
    portfolioLink: "https://www.linkedin.com/in/pranavmanchanda/",
  },
];
