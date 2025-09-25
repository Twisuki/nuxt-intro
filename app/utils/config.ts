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
  name: string
  path: string
  link: string
}

interface UserSingleLayout {
  name?: string
  index: number
  path?: string
}

interface UserLayout {
  bio?: false | UserSingleLayout
  resume?: false | UserSingleLayout
  competitions?: false | UserSingleLayout
  awards?: false | UserSingleLayout
  research?: false | UserSingleLayout
}

const defaultLayout: Layout[] = [
  { name: "Bio", path: "/bio", link: "/bio" },
  { name: "Resume", path: "/resume", link: "/resume" },
  { name: "Competitions", path: "/competitions", link: "/competitions" },
  { name: "Awards", path: "/awards", link: "/awards" },
  { name: "Research", path: "/research", link: "/research" },
]

const normalizeLayout = (userLayout: UserLayout | {}): Layout[] => {
  if (!userLayout) return defaultLayout

  const layouts: (Layout & { index: number })[] = []

  if ("bio" in userLayout && userLayout.bio !== false) {
    layouts.push({
      name: userLayout.bio?.name || "Bio",
      path: userLayout.bio?.path || "/bio",
      index: userLayout.bio?.index ?? 0,
      link: "/bio",
    })
  }
  else if (!("bio" in userLayout) || userLayout.bio !== false) {
    layouts.push({ name: "Bio", path: "/bio", index: 0, link: "/bio" })
  }

  if ("resume" in userLayout && userLayout.resume !== false) {
    layouts.push({
      name: userLayout.resume?.name || "Resume",
      path: userLayout.resume?.path || "/resume",
      index: userLayout.resume?.index ?? 1,
      link: "/resume",
    })
  }
  else if (!("resume" in userLayout) || userLayout.resume !== false) {
    layouts.push({ name: "Resume", path: "/resume", index: 1, link: "/resume" })
  }

  if ("competitions" in userLayout && userLayout.competitions !== false) {
    layouts.push({
      name: userLayout.competitions?.name || "Competitions",
      path: userLayout.competitions?.path || "/competitions",
      index: userLayout.competitions?.index ?? 2,
      link: "/competitions",
    })
  }
  else if (!("competitions" in userLayout) || userLayout.competitions !== false) {
    layouts.push({ name: "Competitions", path: "/competitions", index: 2, link: "/competitions" })
  }

  if ("awards" in userLayout && userLayout.awards !== false) {
    layouts.push({
      name: userLayout.awards?.name || "Awards",
      path: userLayout.awards?.path || "/awards",
      index: userLayout.awards?.index ?? 3,
      link: "/awards",
    })
  }
  else if (!("awards" in userLayout) || userLayout.awards !== false) {
    layouts.push({ name: "Awards", path: "/awards", index: 3, link: "/awards" })
  }

  if ("research" in userLayout && userLayout.research !== false) {
    layouts.push({
      name: userLayout.research?.name || "Research",
      path: userLayout.research?.path || "/research",
      index: userLayout.research?.index ?? 4,
      link: "/research",
    })
  }
  else if (!("research" in userLayout) || userLayout.research !== false) {
    layouts.push({ name: "Research", path: "/research", index: 4, link: "/research" })
  }

  // 排序
  layouts.sort((a, b) => (a.index ?? 0) - (b.index ?? 0))

  return layouts.map((item) => {
    return {
      name: item.name,
      path: item.path,
      link: item.link,
    }
  })
}

const configLoader = (themeConfig: ThemeConfig): Config => {
  const userContact = themeConfig.user.contact || []
  const contact = normalizeContact(userContact)

  const userLayout = themeConfig.layout || {}
  const layout = normalizeLayout(userLayout)

  return {
    site: themeConfig.site.base,
    name: themeConfig.user.name,
    avatar: themeConfig.user.avatar,
    welcome: themeConfig.user.welcome,
    contact: contact,
    layout: layout,
  }
}

const config = configLoader(themeConfig)
export { config }
