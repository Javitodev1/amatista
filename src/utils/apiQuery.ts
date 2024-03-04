export default function apiQuery(query: string) {
  const config = {
    method: "POST",
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query: query }),
  };
  const { HYGRAPH_ENDPOINT } = import.meta.env;
  return fetch(HYGRAPH_ENDPOINT, config);
}
