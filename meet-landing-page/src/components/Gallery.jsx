import { GalleryItem } from './GalleryItem'
import { galleryData } from '../data/data'

export const Gallery = () => {
  return (
    <section className="max-w-content m-auto mb-20 lg:mx-4">
      <ul className="grid grid-cols-4 justify-items-center items-center lg:grid-cols-2 gap-[30px]">
        {galleryData.map((pic, i) => {
          return <GalleryItem key={i} pic={pic} index={i} />
        })}
      </ul>
    </section>
  )
}
