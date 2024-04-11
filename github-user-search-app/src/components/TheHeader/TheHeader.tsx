import { ThemeSwitcher } from '../ThemeSwitcher'
import styles from './TheHeader.module.scss'

export const TheHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>devfinder</div>
      <ThemeSwitcher />
    </header>
  )
}
