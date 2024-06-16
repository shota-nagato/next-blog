import * as cheerio from 'cheerio'

type TocEntry = {
  text: string | null
  name: string | undefined
  id: string
}

export const renderToc = (body: string): TocEntry[] => {
  const $ = cheerio.load(body)
  const headings = $('h1, h2, h3').toArray()
  const toc: TocEntry[] = headings.map((data) => ({
    /* eslint-disable */
    // @ts-ignore
    text: data.children[0]?.data ?? null,
    // @ts-ignore
    name: data.name,
    // @ts-ignore
    id: data.attribs.id,
    /* eslint-enable */
  }))

  return toc
}
