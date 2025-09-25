export interface Config {
  site: string
  name: string
  avatar: string
  welcome: string
  typingSpeed: false | number
  contact: Array<Contact>
  layout: Array<Layout>
}

interface Contact {
  icon: string
  link: string
}

interface Layout {
  name: string
  path: string
  link: string
}
