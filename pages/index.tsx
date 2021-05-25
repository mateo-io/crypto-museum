import fetchFonts from "../lib/fetchFonts"
import Gallery from "../components/Gallery"
import { GalleryItemType } from "../components/component.types"
import { getInitialOpenSeaData } from "../lib/getGallery"

type HomeProps = {
  data: { assets: GalleryItemType[] }
}

export default function Home({ data }: HomeProps) {
  fetchFonts()

  return <Gallery data={data ? data.assets : []} />
}

export const getStaticProps = async (context: any) => {
  const res = await getInitialOpenSeaData()
  const data = await res.json()

  return { props: { data } }
}
