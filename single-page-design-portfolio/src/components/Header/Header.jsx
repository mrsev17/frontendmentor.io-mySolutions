import { BtnConsulation } from '../BtnConsultation/BtnConsultation'
import SVGLogo from '../SVG/SVGLogo'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header
      className={`${styles.headerSection} container flex justify-between sm:px-4 lg:px-0 lg:max-w-1110 xl:max-w-1110 items-center`}
    >
      <SVGLogo />
      <BtnConsulation bgColor={`#030303`} bgHoverColor={`#755cde`} />
    </header>
  )
}
