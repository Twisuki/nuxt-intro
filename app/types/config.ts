export interface Config {
  site: string
  name: string
  avatar: string
  welcome: string
  contact: Array<Contact>
  layout: Array<Layout>
}

interface Contact {
  icon: string
  url: string
}

interface Layout {
  name: string
  path: string
}
