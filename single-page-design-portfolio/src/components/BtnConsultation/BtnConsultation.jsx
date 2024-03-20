import { useState } from 'react'
import styles from './BtnConsulation.module.css'

export const BtnConsulation = ({ bgColor, bgHoverColor }) => {
  const [isHovered, setIsHovered] = useState(false)
  const btnStyles = {
    backgroundColor: isHovered ? bgHoverColor : bgColor,
    border: 'none',
    transition: 'background-color 0.5s ease',
  }
  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  return (
    <button
      style={btnStyles}
      className={styles.btnConsultation}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Free Consultation
    </button>
  )
}
