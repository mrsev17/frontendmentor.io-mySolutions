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
      {/* {isMenuOpen && (
        <ul
          className={`${isMenuOpen && styles.burgerMenuLinksActive}
            flex flex-col gap-6`}
        >
          {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.url}>{link.nameLink}</a>
              </li>
            )
          })}
        </ul>
      )} */}
    </>
  )
}
