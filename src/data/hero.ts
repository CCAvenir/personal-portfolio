import { HeroInfo } from "@/types/hero";

export const heroData: HeroInfo = {
  name: "Christian Avenir",
  title: "Web Developer",
  shortIntroduction:
    "Bachelor of Science in Information Technology graduate specializing in Web Development. Passionate about building responsive, accessible, scalable web applications with modern frontend architectures.",
  currentStatus: "Open to Work",
  profileImagePlaceholder: "https://placehold.co/300x300?text=Profile+Image",
  actions: {
    primary: {
      label: "View Projects",
      href: "#projects",
    },
    secondary: {
      label: "Contact Me",
      href: "#contact",
    },
    resume: {
      label: "Download Resume",
      href: "#resume",
    },
  },
};
