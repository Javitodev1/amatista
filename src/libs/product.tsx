import apiQuery from "@/utils/apiQuery";

export function fetchProducts() {
  const url = "https://sa-east-1.cdn.hygraph.com/content/clsw2dllh01en07unanpr7pv6/master?query=%7B%0A%20%20productos%20%7B%0A%20%20%20%20id%0A%20%20%20%20price%0A%20%20%20%20size%0A%20%20%20%20stock%0A%20%20%20%20tag%0A%20%20%20%20title%0A%20%20%20%20backImg%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%20%20frontImg%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%20%20description%0A%20%20%7D%0A%7D"
  return fetch(url)
}
