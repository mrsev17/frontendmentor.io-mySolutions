import styles from './BannerTitle.module.css'

export const BannerTitle = ({ title, text }) => {
  return (
    <div
      className={`${styles.bannerTitle} text-center flex items-center flex-col`}
    >
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
