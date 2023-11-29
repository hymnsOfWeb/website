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
  secondaryBtn?: string[];
  img: {
    src: string;
    alt: string;
  };
  description: string;
}

export const workData: WorkData[] = [
  {
    title: "The Bunch Ai",
    links: [{ text: "Visit Live", url: "https://www.thebunch.ai/" }],
    img: {
      src: "/assets/images/work/bunchai.webp",
      alt: "Dopegood",
    },
    description:
      "TheBunch.ai aims to bring like-minded people together for exceptional\
      social experiences, forming friendships and creating memories. Our events\
      are through invite only. Once you register for an event, The Bunch.ai team\
      carefully evaluates and accordingly invited will be sent to attend the event.\
      This is to ensure that the members are of the mindset ensuring that everyone\
      blends in well and can network easily.",
  },
  {
    title: "Avita HR Solutions",
    links: [{ text: "Visit Live", url: "https://www.avitahr.com/" }],
    img: {
      src: "/assets/images/work/avitahr.webp",
      alt: "Dopegood",
    },
    description:
      "AVITA HR Solutions is designed to meet the governing need for professional\
      approach in Human Resource Development, Recruitment and Training activities\
      in the corporate world. AVITA HR Solutions is backed by professionals having\
      rich industry experience in India and overseas countries. Our database consists\
      of highly qualified and experienced professionals.",
  },
  {
    title: "QuantumShift",
    links: [{ text: "Visit Live", url: "https://www.quantumshift.in/" }],
    img: {
      src: "/assets/images/work/quantumshift.webp",
      alt: "Dopegood",
    },
    description:
      "Quantumshift is a deep-tech startup that specializes in transforming quantum\
      solutions. Our team of experts is devoted to delivering the most cutting-edge\
      and effective solutions for industries and government organizations that want\
      to leverage the potential of quantum mechanics. We envision that tomorrow's technology\
      begins with attempts of today. At Quantumshift, we guarantee to provide our clients\
      with the highest quality of service and support",
  },
  {
    title: "VintageInkkk",
    links: [{ text: "Visit Live", url: "https://vintageinkk.vercel.app/" }],

    secondaryBtn: ["Template", "For Sale"],
    img: {
      src: "/assets/images/work/vintageinkkk.webp",
      alt: "Dopegood",
    },
    description:
      "Unveil tranquility online with our aesthetic and elegant website template. Elevate your\
      digital presence effortlessly, offering visitors a serene and calming experience.\
      Immerse them in seamless navigation and visually soothing design, creating a harmonious\
      blend of aesthetics. Make a lasting impression with a site that exudes elegance while\
      providing a tranquil online haven for users to explore and engage with ease.",
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

export const homeLandingTexts: [string, string] = [
  "Transforming Visions",
  "Into Digital Resonance",
];

// home page
export const homePageMeta = {
  title: "Hymns of Web | Home",
  description: `Hymns of Web | ${homeLandingTexts.join(" ")} | Home`,
};

export const aboutPageMeta = {
  title: "Hymns of Web | About",
  description: `Hymns of Web | ${homeLandingTexts.join(" ")} | About`,
};

export const contactPageMeta = {
  title: "Hymns of Web | Contact",
  description: `Hymns of Web | ${homeLandingTexts.join(" ")} | Contact`,
};

export const homeAboutTextRibbon = {
  text: "About",
  count: 7,
};

export const homeAboutCard = {
  text: "Meet Hymns of Web - the tech wizards who turn caffeine into code!\
  We're not your average agency; we're the cool cats crafting websites,\
  mobile apps, and desktop wonders. Forget the tech jargon; we speak emoji.\
  Join us on this digital rollercoaster - where pixels party and apps have\
  an attitude. Let's make your online presence as sassy as our coding team!\
  Click to flip ;)",
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
    icon: BsTelephone,
    title: "Call Us",
    href: `tel:${phoneNumber}`,
    text: phoneNumber,
  },
  {
    icon: BsInstagram,
    title: "DM Us",
    href: `https://www.instagram.com/${instaId}`,
    text: "@" + instaId,
  },

  {
    icon: BsEnvelope,
    title: "Mail Us",
    href: `mailto:${mail}`,
    text: mail,
  },
  {
    icon: BsWhatsapp,
    title: "Message Us",
    href: `https://wa.me/${phoneNumber}`,
    text: phoneNumber,
  },
];

export const aboutPageHeading =
  "Our softwares might not be comedians, but they sure know how to perform.";

export const aboutDescription =
  "Hymns of Web orchestrates digital excellence, harmonizing the symphony\
  of cutting-edge technologies with seamless efficiency. As a premier web\
  development and design agency, we compose compelling websites, dynamic\
  web apps, intuitive mobile apps, and powerful desktop applications. Our\
  virtuoso team blends innovation and precision, transforming visions into\
  captivating digital experiences. We navigate the ever-evolving landscape\
  of technology, creating digital solutions that resonate. At Hymns of Web,\
  we compose experiences that resonate, connecting your brand with audiences\
  in ways that are memorable and meaningful. Join us in the crescendo of digital\
  evolution, where every note is a step towards unparalleled success.";

export const aboutServices = [
  {
    title: "Websites",
    description:
      "Craft an impactful online presence with our dynamic and responsive\
      website designs, developed with absolute care and precision.",
  },
  {
    title: "Web Apps",
    description:
      "Unleash innovation with our cutting-edge web application solutions,\
      customized to meet your unique business requirements and technological aspirations.",
  },
  {
    title: "Desktop Apps",
    description:
      "Empower your vision with our advanced desktop application development\
      services, designed to turn ideas into efficient, high-performance tools.",
  },
  {
    title: "Mobile Apps",
    description:
      "Navigate the mobile landscape confidently with our user-friendly and\
      feature-rich mobile app solutions, ensuring seamless interaction and a competitive edge.",
  },
];

export const teamData = [
  {
    name: "Gurdev &\nKanwal",
    about: "CEO & Founder",
    imgSrc: "/assets/images/team/founders.webp",
    portfolioLink: "https://www.hymnsofweb.com",
  },
  {
    name: "Gobind\nSingh",
    about: "Chief Technical Officer",
    imgSrc: "/assets/images/team/gobind.webp",
    portfolioLink: "https://youtu.be/dQw4w9WgXcQ?t=43",
  },
  {
    name: "Sai\nRohit",
    about: "Vice President",
    imgSrc: "/assets/images/team/sai.webp",
    portfolioLink:
      "https://www.linkedin.com/in/sai-rohit-sanniboyina-7a93aa224/",
  },

  {
    name: "Aishwarya\nTewari",
    about: "Head of Management",
    imgSrc: "/assets/images/team/aishwarya.webp",
    portfolioLink: "https://aishwarya.hymnsofweb.com/",
  },
  {
    name: "Abhas\nChatterjee",
    about: "Head of Content",
    imgSrc: "/assets/images/team/abhas.webp",
    portfolioLink: "https://abhas.hymnsofweb.com/",
  },
  {
    name: "Satyam\nSinha",
    about: "Head of Marketing",
    imgSrc: "/assets/images/team/satyam.webp",
    portfolioLink: "https://www.behance.net/satyamsinha_96",
  },
  {
    name: "Pranav\nManchanda",
    about: "Head of Design",
    imgSrc: "/assets/images/team/pranav.webp",
    portfolioLink: "https://www.linkedin.com/in/pranavmanchanda/",
  },
];
