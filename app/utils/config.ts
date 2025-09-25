import type { ThemeConfig } from "~/types/theme"
import type { Config } from "~/types/config"
import themeConfig from "~~/config/theme"

const defineThemeConfig = (themeConfig: ThemeConfig): Config => {
  return {
    site: "/",
    name: "T",
    avatar: "/avatar.png",
    welcome: "Welcome to my site!",
    contact: [],
    layout: [],
  }
}

const config = defineThemeConfig(themeConfig)
export { config }
