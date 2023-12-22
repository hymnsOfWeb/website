import {
  BsEnvelope,
  BsInstagram,
  BsTelephone,
  BsWhatsapp,
} from "react-icons/bs";
import { BubbleDataProps } from "@components/contact-bubble/types";
import { DesktopApp, MobileApp, WebApp, Websites } from "@icons";

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
      alt: "Hymns of Web | The Bunch Ai",
    },
    description:
      "Hymns Of Web proudly crafted the website for TheBunch.ai, a visionary platform\
 fostering exceptional social experiences and meaningful connections. Their exclusive,\
 invite-only events ensure a curated gathering of like-minded individuals, carefully\
 selected by TheBunch.ai team to guarantee a harmonious and conducive networking environment.",
  },
  {
    title: "Avita HR Solutions",
    links: [{ text: "Visit Live", url: "https://www.avitahr.com/" }],
    img: {
      src: "/assets/images/work/avitahr.webp",
      alt: "Hymns of Web | Avita HR Solutions",
    },
    description:
      "Hymns Of Web proudly presents our work with Avita HR Solutions, a leading player\
 in Human Resource Development, Recruitment, and Training. Designed to meet the evolving\
 needs of the corporate world, Avita HR Solutions boasts a team of experienced professionals\
 with rich industry expertise both in India and overseas. Their commitment to excellence\
 aligns seamlessly with Hymns Of Web's dedication to crafting top-notch websites and software solutions.",
  },
  {
    title: "QuantumShift",
    links: [{ text: "Visit Live", url: "https://www.quantumshift.in/" }],
    img: {
      src: "/assets/images/work/quantumshift.webp",
      alt: "Hymns of Web | QuantumShift",
    },
    description:
      "Hymns Of Web proudly collaborated with Quantumshift, a pioneering deep tech startup,\
 to craft their exceptional website. Specializing in transforming quantum solutions,\
 Quantumshift envisions tomorrow's technology through today's efforts. Our team, dedicated \
 to delivering cutting-edge websites and software, is honored to have contributed to \
 Quantumshift's mission of providing top-quality services and support to industries \
 and government organizations exploring the potential of quantum mechanics.",
  },
  {
    title: "The Aesthetic One",
    links: [{ text: "Visit Live", url: "https://vintageinkk.vercel.app/" }],
    secondaryBtn: ["Template", "For Sale"],
    img: {
      src: "/assets/images/work/vintageinkkk.webp",
      alt: "Hymns of Web",
    },
    description:
      "Reveal online serenity with this Hymns Of Web's sophisticated and stylish website template.\
 Enhance your digital footprint effortlessly, providing visitors with a tranquil and aesthetically\
 pleasing experience. Immerse them in seamless navigation and visually pleasing designs, creating a\
 harmonious blend of tech and aesthetics. Leave a lasting impression with a website that radiates\
 elegance, offering users a serene online haven for exploration and engagement with ease.",
  },
];

export const consoleMessage = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠒⠊⠉⠉⠉⠒⠲⢤⣀⠀⠀⠀⠀⠀⣀⣤⠤⠶⠒⠶⠤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠦⡤⠖⠋⠁⠀⠀⠀⠀⠀⠀⠀⠙⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⢀⣀⣠⠤⢤⣀⣀⡀⠀⠀⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢣⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠀⠀⠀⠀⣠⠴⠚⠉⠀⠀⠀⠀⠀⠀⠉⠙⠲⢤⣹⣀⣀⡤⠤⠤⠤⠤⠤⠤⢄⣀⣈⣇⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⡞⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣙⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠓⢦⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠒⣊⡭⠥⠔⠒⠲⠦⠤⢭⣉⣳⣄⣤⣴⣒⣊⡭⠭⠭⠭⠭⠭⣿⣶⣻⣦⣀⠀
⠀⠀⠀⢀⡴⠚⢹⠃⠀⠀⠀⠀⠀⠀⢀⡤⠖⢚⣡⠖⠋⠁⠀⠀⠀⠀⠀⢀⣀⣀⣀⣙⣿⡛⠉⠁⠀⢀⣀⣀⣠⣤⣤⣤⠤⣭⣝⣿⣄
⠀⠀⢠⡞⠁⠀⣾⠀⠀⠀⠀⠀⠀⣾⣛⣛⠋⠉⢀⣀⣀⡠⠤⢶⣶⢿⣿⣿⣤⡀⠀⠀⠈⡷⠒⠚⠉⠉⢠⣿⡿⢿⣿⣿⣦⡀⠀⠉⢻
⠀⢀⡏⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠯⣉⠀⠀⠀⢠⣿⣿⣶⣿⠛⢻⣿⡆⠀⣰⠁⠀⠀⠀⠀⣿⣿⠿⣿⣏⣹⣿⣧⢀⣠⡞
⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠦⢬⣙⠒⠤⢼⠿⢿⡿⠿⠿⠿⠛⠛⢉⡼⠛⠓⠒⠒⠶⠟⠛⠛⠛⠛⠛⠋⢩⡿⠛⠀
⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠒⠒⠒⠒⠒⠒⣲⡾⠉⠉⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠋⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠶⠋⠁⠀⠀⠀⠀⠈⠛⠢⢤⣤⠤⠤⠴⠒⢿⡁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠙⢦⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣤⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⣄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠋⠁⡀⠀⣀⡀⠀⠉⠉⠙⠓⠒⠲⠦⠤⠤⣤⣀⣀⣀⣀⣀⣀⣀⣀⣀⣤⠤⠶⠚⠉⢉⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡅⠀⠀⠉⠉⠉⠉⠉⠓⠒⠶⠤⢤⣤⣀⣀⣀⣀⡀⠀⠀⠉⠉⠉⠉⠁⣀⣀⣀⣀⣠⣴⠟⠁⠀⠀
⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⠀⠙⠒⠒⠒⠒⠒⠲⠦⠤⠤⣀⣀⣀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠀⠀⢀⣿⠀⠀⠀⠀
⠙⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⠦⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠙⠛⠛⠒⠒⠒⠒⠶⠶⠶⠶⢶⡦⠶⠒⠋⠁⠀⠀⠀⠀
⠟⠿⢿⡶⢤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠔⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠉⠓⠦⣭⣉⠓⠒⠶⠦⠤⢤⣄⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⡤⠖⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠓⠲⠦⢤⣤⣤⣀⣀⣀⣉⣉⣉⣉⣉⡉⢉⣉⣉⣉⣉⣩⣭⠟⠛⠷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠈⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;

export const homeLandingTexts: [string, string] = [
  "Websites & apps",
  "built for impact",
];

// home page
export const homePageMeta = {
  title: "Hymns of Web",
  description:
    "Elevate digital presence with Hymns of Web: premier SaaS for cutting-edge website & software solutions.",
  og: {
    title: "Hymns of Web",
    description:
      "Elevate digital presence with Hymns of Web:\
 premier SaaS for cutting-edge website & software solutions.",
    image: "/assets/images/logo.png",
    url: "https://www.hymnsofweb.com",
  },
};

export const aboutPageMeta = {
  title: "Hymns of Web | About",
  description:
    "Elevate digital presence with Hymns of Web:\
 premier SaaS for cutting-edge website & software solutions.",
  og: {
    title: "Hymns of Web | About",
    description:
      "Elevate digital presence with Hymns of Web:\
 premier SaaS for cutting-edge website & software solutions.",
    image: "/favicon.ico",
    url: "https://www.hymnsofweb.com/about",
  },
};

export const contactPageMeta = {
  title: "Hymns of Web | Contact",
  description:
    "Elevate digital presence with Hymns of Web:\
 premier SaaS for cutting-edge website & software solutions.",
  og: {
    title: "Hymns of Web | Contact",
    description:
      "Elevate digital presence with Hymns of Web:\
 premier SaaS for cutting-edge website & software solutions.",
    image: "/favicon.ico",
    url: "https://www.hymnsofweb.com/contact",
  },
};

export const homeAboutTextRibbon = {
  text: "About",
  count: 5,
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
      "Craft an impactful online presence with Hymns of Web's dynamic and responsive\
      website designs, developed with absolute care and precision.",
    imgSrc: "/assets/images/services/tl.webp",
    mainImgSrc: "/assets/images/services/main-service.webp",
    icon: Websites,
  },
  {
    title: "Web Apps",
    description:
      "Unleash innovation with our cutting-edge web application solutions,\
      customized to meet your unique business requirements and technological aspirations.",

    imgSrc: "/assets/images/services/tr.webp",
    mainImgSrc: "/assets/images/services/main-service.webp",
    icon: WebApp,
  },
  {
    title: "Desktop Apps",
    description:
      "Empower your vision with Hymns ofWeb's advanced desktop application development\
      services, designed to turn ideas into efficient, high-performance tools.",
    imgSrc: "/assets/images/services/bl.webp",
    mainImgSrc: "/assets/images/services/main-service.webp",
    icon: DesktopApp,
  },
  {
    title: "Mobile Apps",
    description:
      "Navigate the mobile landscape confidently with our user-friendly and\
      feature-rich mobile app solutions, ensuring seamless interaction and a competitive edge.",
    imgSrc: "/assets/images/services/br.webp",
    mainImgSrc: "/assets/images/services/main-service.webp",
    icon: MobileApp,
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
