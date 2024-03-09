import { useState } from 'react'
import { navLinks } from '../../utils/data'
import styles from './BurgerMenu.module.css'

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div
        onClick={openMenu}
        className={`${styles.burgerMenu} flex flex-col gap-1 sm:hidden ${
          isMenuOpen ? styles.burgerMenuActive : styles.burgerMenuNotActive
        } 
        }`}
      >
        <div className={styles.burgerMenuBar}></div>
        <div className={styles.burgerMenuBar}></div>
        <div className={styles.burgerMenuBar}></div>
      </div>
      {isMenuOpen && (
        <div className={styles.modalOverlay}>
          <ul className={styles.modalContent}>
            {navLinks.map((link) => {
              return (
                <li key={link.nameLink}>
                  <a href={link.url}>{link.nameLink}</a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </>
  )
}
