import { navLinks } from '../../utils/data'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={`justify-center gap-10 hidden sm:flex`}>
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.url}>{link.nameLink}</a>
            </li>
          )
        })}
      </ul>
      <BurgerMenu />
    </nav>
  )
}
