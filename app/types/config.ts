export interface Config {
  site: string
  name: string
  avatar: string
  welcome: string
  contact: Array<Contact>
  layout: Array<SingleLayout>
}

interface Contact {
  icon: string
  url: string
}

interface SingleLayout {
  name: string
  index: number
  path: string
}
