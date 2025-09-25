export interface ThemeConfig {
  site: SiteConfig
  user: UserConfig
  layout?: LayoutConfig
}

interface SiteConfig {
  base: string
}

interface UserConfig {
  name: string
  avatar: string
  welcome: string
  typingSpeed?: false | number
  contact?: Array<Contact>
}

interface Contact {
  name: string
  icon?: string
  link: string
}

interface LayoutConfig {
  bio?: false | Layout
  resume?: false | Layout
  competitions?: false | Layout
  awards?: false | Layout
  research?: false | Layout
}

interface Layout {
  name?: string
  index: number
  path?: string
}
