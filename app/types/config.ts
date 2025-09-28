export interface Config {
  base: string
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
  key: string
  name: string
  link: string
}
