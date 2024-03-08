import bannerDesktop from '../../assets/images/image-web-3-desktop.jpg'
import global from '../../globalStyles.module.css'
import { NewsPanel } from '../../components'
import styles from './Banner.module.css'

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={global.container}>
        <div
          className={`${styles.bannerWrapper} flex justify-between flex-col lg:flex-row`}
        >
          <div
            className={`${styles.bannerLeft} flex flex-col gap-7 mb-16 lg:mb-0`}
          >
            <img src={bannerDesktop} alt="Art of Web3" />
            <div
              className={`${styles.bannerLeftTitle} flex justify-between flex-col lg:flex-row`}
            >
              <h1 className="max-w-full text-center lg:max-w-sm lg:text-left">
                The Bright Future of Web 3.0?
              </h1>
              <div className="flex flex-col lg:justify-between">
                <p className="mb-4 text-center lg:text-left lg:mb-0">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="w-full lg:w-185">Read More</button>
              </div>
            </div>
          </div>
          <div className={`${styles.bannerRight} max-w-full lg:max-w-[350px]`}>
            <NewsPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
