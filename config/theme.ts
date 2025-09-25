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
    ],
  },
  layout: {
    bio: {
      index: 1,
    },
    resume: false,
    competitions: {
      name: "竞赛",
      index: 10,
    },
  },
} as ThemeConfig
