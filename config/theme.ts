import type { ThemeConfig } from "~/types/theme"

export default {
  site: {
    base: "/",
  },
  user: {
    name: "Twisuki",
    avatar: "/avatar.png",
    welcome: "Welcome to my site!",
    contact: [
      { name: "Github", link: "https://github.com/Twisuki" },
      { name: "LinkedIn", link: "" },
      { name: "Email", link: "mailto://twisuki@outlook.com" },
      { name: "Download", icon: "fa-solid fa-download", link: "" },
    ],
  },
} as ThemeConfig
