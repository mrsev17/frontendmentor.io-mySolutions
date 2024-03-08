import bannerDesktop from '../../assets/images/image-web-3-desktop.jpg'
import global from '../../globalStyles.module.css'
import { NewsPanel } from '../../components'
import styles from './Banner.module.css'

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={global.container}>
        <div className={`${styles.bannerWrapper} flex justify-between`}>
          <div className={`${styles.bannerLeft} flex flex-col gap-7`}>
            <img src={bannerDesktop} alt="Art of Web3" />
            <div className={`${styles.bannerLeftTitle} flex justify-between`}>
              <h1 className="max-w-sm"> The Bright Future of Web 3.0?</h1>
              <div className="flex flex-col justify-between">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div className={styles.bannerRight}>
            <NewsPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
