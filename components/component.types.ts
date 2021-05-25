// incomplete
type ContractType = {
  address: string
  name: string
}

// incomplete
type LastSale = {
  total_price: string
}

type Creator = {
  user: { username: string }
  address: string
  profile_img_url: string
}

// incomplete
export type GalleryItemType = {
  id: number
  name: string
  token_id: string
  num_sales: number
  image_url: string
  image_thumbnail_url: string
  asset_contract: ContractType
  top_bid: number
  last_sale: LastSale
  permalink: string
  description: string
  creator: Creator
}
