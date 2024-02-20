import websiteTexts from '@/data/texts.json'

interface PageText {
  id: number
  page: string
  section: string
  key: string
  value: string
}

function fetchTexts(): PageText[] {
  return websiteTexts
}

export function fetchSections(targetPage: string) {
  const pageContent = fetchTexts().filter(({ page }) => page === targetPage)
  return pageContent.reduce((acc: any, el: PageText) => {
    const { section, key, value } = el
    if (!acc[section]) {
      acc[section] = {}
    }
    acc[section][key] = value
    return acc
  }, {})
}
