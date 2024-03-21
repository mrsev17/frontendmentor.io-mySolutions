import { BannerTitle } from '../BannerTitle'
import graphDesign from '../../assets/pattern-graphic-design.svg'
import uiUx from '../../assets/pattern-ui-ux.svg'
import apppsImg from '../../assets/pattern-apps.svg'
import ilustrationsImg from '../../assets/pattern-illustrations.svg'
import photographyImg from '../../assets/pattern-photography.svg'
import motionGraphImg from '../../assets/pattern-motion-graphics.svg'
import styles from './Banner.module.css'

export const Banner = () => {
  return (
    <section className={`${styles.banner} px-4`}>
      <div
        className={`${styles.bannerContent} container flex flex-col gap-8 sm:gap-20 sm:px-4 lg:px-0 lg:max-w-1110 xl:max-w-1110 items-center`}
      >
        <BannerTitle
          title="Design solutions made easy"
          text="With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs."
        />
        <div className={`${styles.bannerArt} w-full`}>
          <div
            className={`flex justify-between flex-col md:flex-row md: gap-6`}
          >
            <div
              className={`${styles.bannerLeftDesign} flex flex-col sm:flex-row gap-6`}
            >
              <div
                className={`${styles.bannerLeftDesignPurple} flex flex-col p-6 rounded-lg w-full`}
              >
                <div className="flex justify-end">
                  <img src={graphDesign} alt="Graphic Design Art" />
                </div>
                <h2>Graphic Design</h2>
              </div>
              <div
                className={`${styles.bannerLeftUI} w-full flex flex-col gap-6`}
              >
                <div className={`${styles.bannerLeftUIUpper} flex gap-6`}>
                  <div
                    className={`${styles.bannerLeftUIOrange} flex flex-col gap-10 p-6 rounded-lg w-full`}
                  >
                    <div className="flex justify-end">
                      <img src={uiUx} alt="Graphic UX/UI art" />
                    </div>
                    <h2>UX/UI</h2>
                  </div>
                  <div
                    className={`${styles.bannerLeftUIPink} flex flex-col gap-10 p-6 rounded-lg w-full`}
                  >
                    <div className="flex justify-end">
                      <img src={apppsImg} alt="Graphic Apps art" />
                    </div>
                    <h2>Appps</h2>
                  </div>
                </div>
                <div className={`${styles.bannerLeftUIBottom}`}>
                  <div
                    className={`${styles.bannerLeftUIRed} flex flex-col gap-4 p-6 rounded-lg`}
                  >
                    <div className="flex justify-end">
                      <img
                        src={ilustrationsImg}
                        alt="Graphic Ilustrations art"
                      />
                    </div>
                    <h2>Ilustrations</h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.bannerRight} w-full flex flex-col sm:flex-row md:flex-col gap-6 justify-between`}
            >
              <div
                className={`${styles.bannerRightUpContent} flex flex-col justify-between gap-4 p-6 rounded-lg w-full h-full`}
              >
                <div className="flex justify-end">
                  <img src={photographyImg} alt="Graphic Photography art" />
                </div>
                <h2>Photography</h2>
              </div>

              <div
                className={`${styles.bannerRightBottom} w-full flex justify-start md:justify-end`}
              >
                <div
                  className={`${styles.bannerRightBottomContent} flex flex-col gap-4 p-6 rounded-lg w-full`}
                >
                  <div className="flex justify-end">
                    <img src={motionGraphImg} alt="Graphic Ilustrations art" />
                  </div>
                  <h2>Motion Graphics</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
