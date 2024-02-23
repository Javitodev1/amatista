// import websiteTexts from '@/data/texts.json'
import apiQuery from '@/utils/apiQuery'

interface PageText {
  id: number
  page: string
  section: string
  key: string
  value: string
}

function fetchTexts() {
  return apiQuery(`{
    textos(first:32) {
      key
      page
      value
      section
      id
    }
  }
  `)
}

export function reduceSections(targetPage:string, data:PageText[]) {
  return data
  .filter(({ page }) => page === targetPage)
  .reduce((acc: any, el: PageText) => {
    const { section, key, value } = el
    if (!acc[section]) {
      acc[section] = {}
    }
    acc[section][key] = value
    return acc
  }, {})
}

export function fetchSections() {
  return fetchTexts()
}
