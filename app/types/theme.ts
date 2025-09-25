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
  contact?: Array<Contact>
}

interface Contact {
  name: string
  icon?: string
  url: string
}

interface LayoutConfig {
  bio?: false | SingleLayout
  resume?: false | SingleLayout
  competitions?: false | SingleLayout
  awards?: false | SingleLayout
  research?: false | SingleLayout
}

interface SingleLayout {
  index: number
  name: string
  path: string
}
