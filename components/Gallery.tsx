import { GalleryItemType } from "./component.types"
import GalleryItem from "./GalleryItem"

type GalleryProps = {
  data: GalleryItemType[]
}

export default function Gallery({ data }: GalleryProps) {
  return (
    <main className="bg-primary flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="max-w-4xl">
        <div className="flex flex-wrap">
          {data.length &&
            data.map((galleryItem: GalleryItemType) => (
              <GalleryItem key={galleryItem.id} galleryItem={galleryItem} />
            ))}
        </div>
      </div>
    </main>
  )
}
