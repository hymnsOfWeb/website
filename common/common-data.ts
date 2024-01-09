import { StaticImageData } from "next/image";
import {
  BsEnvelope,
  BsInstagram,
  BsTelephone,
  BsWhatsapp,
  BsBrush,
  BsEnvelopePaperHeart,
} from "react-icons/bs";
import { TbClick, TbWorldWww, TbTimeline } from "react-icons/tb";
import { BubbleDataProps } from "@components/contact-bubble/types";
import { DesktopApp, MobileApp, WebApp, Websites } from "@icons";
import aestheticImg from "../public/assets/images/mockups/aesthetic.png";
import ashuImg from "../public/assets/images/mockups/ashu.png";
import avitaHRImg from "../public/assets/images/mockups/avitahr.png";
import cleanTankImg from "../public/assets/images/mockups/cleantank.png";
import bunchAiImg from "../public/assets/images/mockups/thebunchai.png";

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
    src: StaticImageData;
    alt: string;
  };
  description: string;
}

export const dWebWorkHeading = "Featured Work";

export const workData: WorkData[] = [
  {
    title: "The Bunch Ai",
    links: [{ text: "Visit Live", url: "https://www.thebunch.ai/" }],
    img: {
      src: bunchAiImg,
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
      src: avitaHRImg,
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
    title: "CleanTank",
    links: [{ text: "Visit Live", url: "https://cleantankservices.com/" }],
    img: {
      src: cleanTankImg,
      alt: "Hymns of Web | QuantumShift",
    },
    description:
      "Hymns Of Web is thrilled to announce a successful collaboration with CleanTank,\
      a leading expert in tank cleaning services. Teaming up with CleanTank, a company\
      committed to maintaining the highest standards in tank hygiene, we've crafted an\
      outstanding website that reflects their dedication to professional tank cleaning solutions.\
      CleanTank stands as a pioneer in the industry, employing cutting-edge techniques and technology\
      to ensure the cleanliness and safety of various tanks.",
  },
  {
    title: "The Aesthetic One",
    links: [{ text: "Visit Live", url: "https://vintageinkk.vercel.app/" }],
    secondaryBtn: ["Template", "For Sale"],
    img: {
      src: aestheticImg,
      alt: "Hymns of Web",
    },
    description:
      "Reveal online serenity with this Hymns Of Web's sophisticated and stylish website template.\
 Enhance your digital footprint effortlessly, providing visitors with a tranquil and aesthetically\
 pleasing experience. Immerse them in seamless navigation and visually pleasing designs, creating a\
 harmonious blend of tech and aesthetics. Leave a lasting impression with a website that radiates\
 elegance, offering users a serene online haven for exploration and engagement with ease.",
  },
  {
    title: "Company Portfolio",
    links: [{ text: "Visit Live", url: "https://ashucrafts.vercel.app/" }],
    secondaryBtn: ["Template", "For Sale"],
    img: {
      src: ashuImg,
      alt: "Hymns of Web",
    },
    description:
      "Elevate your online presence with the Corporate Elegance website template,\
      a sophisticated and stylish design tailored for showcasing your company's portfolio.\
      Immerse your visitors in a seamless journey through your achievements and services,\
      providing them with an aesthetically pleasing and tranquil experience.",
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
  "Our softwares might not be\ncomedians, but they sure know\nhow to perform.";

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
    imgSrc: "/assets/images/team/aish.webp",
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

export const valensiteLandingData = {
  heading: "Valensite",
  subtext: "Brought to you by Hymns Of Web",
  btn: {
    text: "Get Started",
    Icon: TbClick,
    link: "/",
  },
};

export const valensiteAbout = {
  heading: "Modern Love",
  description:
    "Skip the teddy bears, Valensite is your valentine's dream!\
    Valensite is the ultimate Valentine's Day gift: a website\
    packed with your love story. It's like a cozy online retreat,\
    filled with special photos, memories, and even poems you both love.\
    Imagine clicking through a timeline of your romance, with each\
    click revealing deeper layers of your love. Think of it as a\
    one-of-a-kind love treasure chest, personalized just for you two.\
    It's not just a website, it's a living memory keeper, a vibrant\
    celebration of your love whispers and stolen kisses. Every click\
    and scroll paints a beautiful picture of your forever. It's more\
    than a gift, it's your love, online! ",
};

export const valensiteFeatures = [
  {
    Icon: BsBrush,
    text: "Customizable Themes",
  },
  {
    Icon: TbWorldWww,
    text: "Personalized Domain",
  },
  {
    Icon: BsEnvelopePaperHeart,
    text: "Photo Gallery & Love Notes",
  },
  {
    Icon: TbTimeline,
    text: "Interactive Timeline",
  },
];

export const valensitePlanHeading = {
  heading: "Our Plans",
  subtext: "Remember it's not the gift but the thought that counts <3",
};

export const valensitePlans = [
  {
    name: "Gold",
    price: "2999",
    color: "#fffe10",
    popular: false,
    btn: {
      text: "Know More",
      link: "/",
    },
    booleanFeatures: [
      {
        featName: "Apple",
        approval: false,
      },
      {
        featName: "Samsung",
        approval: false,
      },
      {
        featName: "Moto",
        approval: true,
      },
      {
        featName: "Nokia",
        approval: false,
      },
    ],
    valuedFeatures: [
      {
        featName: "Supported Devices",
        values: "Phone, Tablets",
      },
      {
        featName: "Time To Live",
        values: "14 days",
      },
      {
        featName: "Treasure Path",
        values: "Fully Custom",
      },
    ],
  },
  {
    name: "Platinum",
    price: "4999",
    color: "#a3b4c8",
    popular: true,
    btn: {
      text: "Know More",
      link: "/",
    },
    booleanFeatures: [
      {
        featName: "Apple",
        approval: true,
      },
      {
        featName: "Samsung",
        approval: true,
      },
      {
        featName: "Moto",
        approval: true,
      },
      {
        featName: "Nokia",
        approval: true,
      },
    ],
    valuedFeatures: [
      {
        featName: "Supported Devices",
        values: "Phone, Tablets",
      },
      {
        featName: "Time To Live",
        values: "14 days",
      },
      {
        featName: "Treasure Path",
        values: "Fully Custom",
      },
    ],
  },
  {
    name: "Diamond",
    price: "5999",
    color: "#74d2f4",
    popular: false,
    btn: {
      text: "Know More",
      link: "/",
    },
    booleanFeatures: [
      {
        featName: "Apple",
        approval: true,
      },
      {
        featName: "Samsung",
        approval: false,
      },
      {
        featName: "Moto",
        approval: true,
      },
      {
        featName: "Nokia",
        approval: true,
      },
    ],
    valuedFeatures: [
      {
        featName: "Supported Devices",
        values: "Phone, Tablets",
      },
      {
        featName: "Time To Live",
        values: "14 days",
      },
      {
        featName: "Treasure Path",
        values: "Fully Custom",
      },
    ],
  },
];

export const valContactHeading = {
  heading: "Contact Us",
  subheading:
    "For best offers and to know more about valentine reach out to us.",
};

export const valensiteNav = [
  {
    text: "Valensite",
    link: "/valensite#valensite-landing",
  },
  {
    text: "About",
    link: "/valensite#valensite-about",
  },
  {
    text: "Plans",
    link: "/valensite#valensite-plans",
  },
  {
    text: "Features",
    link: "/valensite#valensite-features",
  },
  {
    text: "Contact Us",
    link: "/valensite#valensite-contact",
  },
];

export const valensiteFeaturesData = {
  heading: "Why Valensite",
  desc: "Gifting a Valensite by Hymns of Web surpasses traditional gifts with its\
  personalized touch, offering a unique celebration of shared moments and achievements.\
  Unlike standard presents, this digital masterpiece evokes emotional connection through\
  interactive elements and curated collages, making it a lasting and meaningful tribute to\
  your relationship. It goes beyond material possessions, embodying the essence of your love\
  story, ensuring a Valentine's Day gift that resonates on a deeper, more sentimental level.",
  quote:
    "Are you Valensite? Because just like the perfect webpage, you've got all the elements to make my heart click.",
};
