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
