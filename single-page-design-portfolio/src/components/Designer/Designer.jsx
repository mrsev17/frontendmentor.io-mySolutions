import designer from '../../assets/image-amy.webp'
import { BtnConsulation } from '../BtnConsultation'
import styles from './Designer.module.css'

export const Designer = () => {
  return (
    <section
      className={`${styles.designerSection} container flex flex-col sm:flex-row items-center sm:justify-between sm:px-4 lg:px-0 lg:max-w-1110 xl:max-w-1110`}
    >
      <div className={`${styles.designerPic}`}>
        <img src={designer} alt="Designer" />
      </div>

      <div className="flex flex-col justify-center w-3/4 sm: w-full text-center sm:text-start">
        <h3 className="font-bold">
          I’m Amy, and I’d love to work on your next project
        </h3>
        <p className="mb-2 sm:mb-8 font-medium">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <BtnConsulation bgColor={`#EB7565`} bgHoverColor={`#F6A560`} />
      </div>
    </section>
  )
}
