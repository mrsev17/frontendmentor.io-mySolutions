import PicOne from '../assets/images/desktop/image-woman-in-videocall.jpg'
import PicTwo from '../assets/images/desktop/image-women-videochatting.jpg'
import PicThree from '../assets/images/desktop/image-men-in-meeting.jpg'
import PicFour from '../assets/images/desktop/image-man-texting.jpg'

const galleryData = [PicOne, PicTwo, PicThree, PicFour]

export const Gallery = () => {
  return (
    <section className="max-w-content m-auto mb-20 lg:mx-4">
      <ul className="grid grid-cols-4 justify-items-center items-center lg:grid-cols-2 gap-[30px]">
        {galleryData.map((pic, i) => {
          return (
            <li key={i} className="rounded-lg justify-self-center">
              <img
                src={pic}
                alt={`Picture ${i + 1}`}
                className="max-w-[255px] max-h-[242px] tablet:max-w-[164px] tablet:max-h-[156px] rounded-lg"
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
