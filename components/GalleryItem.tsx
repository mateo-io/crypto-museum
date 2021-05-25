import { GalleryItemType } from "./component.types"

type GalleryProps = { galleryItem: GalleryItemType }

export default function GalleryItem({ galleryItem }: GalleryProps) {
  const { image_thumbnail_url, permalink } = galleryItem
  return (
    <div className="h-80 w-64 bg-white m-4 rounded-lg">
      <a href={permalink} target="_">
        <img
          className="h-48 w-full rounded-t-lg cursor-pointer"
          src={image_thumbnail_url}
        ></img>
      </a>
      <GalleryDetails galleryItem={galleryItem} />
    </div>
  )
}

function GalleryDetails({ galleryItem }: GalleryProps) {
  const { last_sale, name, creator } = galleryItem
  const etherPrice = convertWeiToEther(
    last_sale ? last_sale.total_price : "2222222222220000000000000000"
  )
  return (
    <div>
      <h4 className="my-2 mx-2 font-bold text-black font-title text-2xl tracking-wider whitespace-wrap truncate">
        {name}
      </h4>
      <div className="text-left mx-2 text-darkGrey">
        {creator && (
          <div className="flex">
            <img className="h-5 w-5 mx-1" src={creator.profile_img_url} />
            <a
              target="_"
              href={`https://etherscan.io/address/${creator.address}`}
            >
              {creator.user.username ? creator.user.username : "Not available"}
            </a>
          </div>
        )}
        {last_sale ? (
          <p className="bg-gradient-to-r text-center from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-helvetica my-1">
            Sold for {displayEther(etherPrice)} ETH
          </p>
        ) : (
          <p className="text-center font-helvetica my-1">Up for auction</p>
        )}
      </div>
    </div>
  )
}

const convertWeiToEther = (wei: string) => parseInt(wei) / 10 ** 18

// this will round it up to two decimals, we lose money but gain readability
const displayEther = (ether: number) => {
  return Math.round(ether * 100) / 100
}
