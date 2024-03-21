import slide1 from '../../assets/image-slide-1.jpg'
import slide2 from '../../assets/image-slide-2.jpg'
import slide3 from '../../assets/image-slide-3.jpg'
import slide4 from '../../assets/image-slide-4.jpg'
import slide5 from '../../assets/image-slide-5.jpg'
import Flickity from 'react-flickity-component'
import styles from './MyWork.module.css'

const flickityOptions = {
  initialIndex: 2,
}

export const MyWork = () => {
  const dataSlides = [slide1, slide2, slide3, slide4, slide5]
  return (
    <section className={`${styles.myWork}`}>
      <h5 className="font-bold text-center mb-8 sm:mb-14">My Work</h5>
      <Flickity
        className="Slider"
        elementType="div"
        disableImagesLoaded={false}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {dataSlides.map((img, i) => {
          return (
            <div key={i} className="slide-wrap">
              <img src={img} alt={`Slide ${i}`} />
            </div>
          )
        })}
      </Flickity>
    </section>
  )
}
