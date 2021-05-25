import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const OPEN_SEA_API_ENDPOINT = "https://api.opensea.io/api/v1"

// TODO -> unused
export const useOpenSeaGallery = () => {
  const url = `/assets?order_by=visitor_count&order_direction=desc&offset=0&limit=20`
  return useSWR(OPEN_SEA_API_ENDPOINT + url, fetcher)
}

export const getInitialOpenSeaData = () => {
  const url = `/assets?order_by=visitor_count&order_direction=desc&offset=0&limit=20`
  return fetch(OPEN_SEA_API_ENDPOINT + url)
}
