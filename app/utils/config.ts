import type { ThemeConfig } from "~/types/theme"
import type { Config } from "~/types/config"
import themeConfig from "~~/config/theme"

interface UserContact {
  name: string
  icon?: string
  link: string
}

interface Contact {
  icon: string
  link: string
}

const presetContactLogo = {
  Github: "fa-brands fa-github",
  Twitter: "fa-brands fa-x-twitter",
  LinkedIn: "fa-brands fa-linkedin-in",
  Email: "fa-solid fa-envelope",
}

const normalizeContact = (userContact: UserContact[]): Contact[] => {
  return userContact.map((item) => {
    let icon = ""
    if (item.name in presetContactLogo) {
      icon = presetContactLogo[item.name as keyof typeof presetContactLogo]
    }
    else {
      icon = item.icon || "fa-solid fa-link"
    }
    return {
      icon: icon,
      link: item.link,
    }
  })
}

interface Layout {
  key: string
  name: string
  link: string
}

interface UserSingleLayout {
  name?: string
  index: number
}

interface UserLayout {
  bio?: false | UserSingleLayout
  resume?: false | UserSingleLayout
  competitions?: false | UserSingleLayout
  awards?: false | UserSingleLayout
  research?: false | UserSingleLayout
}

const defaultLayout: Layout[] = [
  { key: "bio", name: "Bio", link: "/bio" },
  { key: "resume", name: "Resume", link: "/resume" },
  { key: "competitions", name: "Competitions", link: "/competitions" },
  { key: "awards", name: "Awards", link: "/awards" },
  { key: "research", name: "Research", link: "/research" },
]

const normalizeLayout = (userLayout: UserLayout | {}): Layout[] => {
  if (!userLayout) return defaultLayout

  const layouts: (Layout & { index: number })[] = []

  if ("bio" in userLayout && userLayout.bio !== false) {
    layouts.push({
      key: "bio",
      name: userLayout.bio?.name || "Bio",
      index: userLayout.bio?.index ?? 0,
      link: "/bio",
    })
  }
  else if (!("bio" in userLayout) || userLayout.bio !== false) {
    layouts.push({ name: "Bio", key: "bio", index: 0, link: "/bio" })
  }

  if ("resume" in userLayout && userLayout.resume !== false) {
    layouts.push({
      key: "resume",
      name: userLayout.resume?.name || "Resume",
      index: userLayout.resume?.index ?? 1,
      link: "/resume",
    })
  }
  else if (!("resume" in userLayout) || userLayout.resume !== false) {
    layouts.push({ key: "resume", name: "Resume", index: 1, link: "/resume" })
  }

  if ("competitions" in userLayout && userLayout.competitions !== false) {
    layouts.push({
      key: "competitions",
      name: userLayout.competitions?.name || "Competitions",
      index: userLayout.competitions?.index ?? 2,
      link: "/competitions",
    })
  }
  else if (!("competitions" in userLayout) || userLayout.competitions !== false) {
    layouts.push({ key: "competitions", name: "Competitions", index: 2, link: "/competitions" })
  }

  if ("awards" in userLayout && userLayout.awards !== false) {
    layouts.push({
      key: "awards",
      name: userLayout.awards?.name || "Awards",
      index: userLayout.awards?.index ?? 3,
      link: "/awards",
    })
  }
  else if (!("awards" in userLayout) || userLayout.awards !== false) {
    layouts.push({ key: "awards", name: "Awards", index: 3, link: "/awards" })
  }

  if ("research" in userLayout && userLayout.research !== false) {
    layouts.push({
      key: "research",
      name: userLayout.research?.name || "Research",
      index: userLayout.research?.index ?? 4,
      link: "/research",
    })
  }
  else if (!("research" in userLayout) || userLayout.research !== false) {
    layouts.push({ key: "research", name: "Research", index: 4, link: "/research" })
  }

  // 排序
  layouts.sort((a, b) => (a.index ?? 0) - (b.index ?? 0))

  return layouts.map((item) => {
    return {
      key: item.key,
      name: item.name,
      link: item.link,
    }
  })
}

const configLoader = (themeConfig: ThemeConfig): Config => {
  const userContact = themeConfig.user.contact || []
  const contact = normalizeContact(userContact)

  const userLayout = themeConfig.layout || {}
  const layout = normalizeLayout(userLayout)

  let typingSpeed: false | number = 15
  if (themeConfig.user.typingSpeed !== undefined) typingSpeed = themeConfig.user.typingSpeed

  return {
    site: themeConfig.site.base,
    name: themeConfig.user.name,
    avatar: themeConfig.user.avatar,
    welcome: themeConfig.user.welcome,
    typingSpeed: typingSpeed,
    contact: contact,
    layout: layout,
  }
}

const config = configLoader(themeConfig)
export { config }
