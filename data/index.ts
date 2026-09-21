import type { BentoKind } from "@/components/ui/bento-grid";

type GridItem = {
  id: number;
  kind: BentoKind;
  title: string;
  description: string;
  body?: string;
  tags?: string[];
  className: string;
  titleClassName: string;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
};



export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Philosophy", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems: GridItem[] = [
  {
    id: 1,
    kind: "savonius",
    title: "Engineer with a passion for renewable energy and sustainability",
    description: "Scroll to spin my building-mounted Savonius turbine",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[80vh]",
    titleClassName: "justify-end",
  },
  {
    id: 2,
    kind: "globe",
    title: "Let's create a sustainable world together",
    description: "",
    body:"",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-center text-center",
  },
  {
    id: 3,
    kind: "aquaponics",
    title: "Automated aquaponics system",
    description: "Engineers for a Sustainable World",
    body: "A closed loop where fish waste feeds the plants and the plants clean the water, automated so it runs without daily hand-tuning.",
    tags: ["Automation", "Sensing", "Food systems"],
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-center",
  },
  {
    id: 4,
    kind: "ycaf",
    title: "Selected to map urban heat islands",
    description: "Evanston Youth Climate Action Fund",
    body: "10 environmental monitoring stations.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-start",
  },
  {
    id: 5,
    kind: "carbon",
    title: "Currently developing and scaling chemical carbon capture",
    description: "My research",
    className: "md:col-span-3 md:row-span-2",
    titleClassName: "justify-center md:justify-start lg:justify-center",
  },
  {
    id: 6,
    kind: "collaborate",
    title: "Want to build something together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Corner-Mounted Savonius Wind Turbine",
    des: "Designed to mitigate and harness Pedestrian Level Wind (PLW) to reduce wind tunnels and produce renewable energy.",
    img: "Savonius_Thumbnail.png",
    iconLists: ["/onshape.jpeg", "/ansys.svg", "/solidworks.svg", "/bambulab.svg", "/gobilda.jpeg"],
    link: "https://docs.google.com/document/d/13gGGFJOn8KzLHGHgXjVsXO9oGBXtMkRF7ZYaDgNIy-E/edit?usp=sharing",
  },
  {
    id: 2,
    title: "AutoAquaponics with ESW@NU",
    des: "Closed-loop autonomous aquaponics system with live fish and consistent agricultural output.",
    img: "AutoAquaponics_Thumbnail.png",
    iconLists: ["/react.svg", "/raspberry-pi.svg", "/firebase.svg", "/esp32.svg", "/bluetooth.svg"],
    link: "https://autoaquaponics.org/",
  },
  {
    id: 3,
    title: "Reversible Chemical Carbon Capture",
    des: "Harnessing the power of metal complexes to study a ligand scaffold with one of the fastest recorded carbon capture rates at the molecular level.",
    img: "Carbon_Thumbnail.png",
    iconLists: ["/orca.png", "/agilent.svg", "/rigaku.jpeg"],
    link: "https://docs.google.com/document/d/1e1xEnnvVu6fRse79MKA5VVj91i01X4a_GLOaqiaSSgQ/edit?usp=sharing",
  },
  {
    id: 4,
    title: "Environmental Monitoring with the City of Evanston",
    des: "Leveraging existing climate datasets to identify vulnerable and control locations where environmental monitoring stations will be deployed to provide higher-resolution ground-level data.",
    img: "YCAF_Thumbnail.png",
    iconLists: ["/esp32.svg", "/bluetooth.svg", "/python.svg"],
    link: "https://docs.google.com/document/d/1eU6xjkdP0gadG0txR5mC16ftd7-qCwiWg1U0MwhKiOw/edit?usp=sharing",
  },
];

export const testimonials = [
  {
    quote:
      "",
    name: "",
    title: "",
  },
  {
    quote:
      "",
    name: "",
    title: "",
  },
  {
    quote:
      "",
    name: "",
    title: "",
  },
  {
    quote:
      "",
    name: "",
    title: "",
  },
  {
    quote:
      "",
    name: "",
    title: "",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    name: "Github",
    link: "https://github.com/MartinSuarezJ",
  },
  {
    id: 2,
    img: "/linkedin.svg",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/martin-suarez-09b707334/",
  },
  {
    id: 3,
    img: "/instagram.svg",
    name: "Instagram",
    link: "https://www.instagram.com/martins_601/"
  },
];