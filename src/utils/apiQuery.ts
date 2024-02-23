export default function apiQuery(query: string) {
  return fetch(import.meta.env.HYGRAPH_ENDPOINT, {
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query:query})
  })
}