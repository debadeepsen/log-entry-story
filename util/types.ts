export type Entry = {
  id: string
  author: string
  role: string
  location: string
  stardate: string
  content: string
}

export type Story = {
  title: string
  authors: string[],
  entries: Entry[]
}
