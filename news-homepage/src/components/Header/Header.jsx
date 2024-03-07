import { Navigation } from '../../components'
import logo from '../../assets/images/logo.svg'
import styles from './Header.module.css'
import global from '../../globalStyles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={global.container}>
        <div
          className={`${styles.headerWrapper} flex justify-between items-center`}
        >
          <img src={logo} alt="Logo" />
          <Navigation />
        </div>
      </div>
    </header>
  )
}
