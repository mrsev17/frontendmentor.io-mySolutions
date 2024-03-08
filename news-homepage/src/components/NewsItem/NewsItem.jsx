import styles from './NewsItem.module.css'

export const NewsItem = ({ url, title, text, length, index }) => {
  return (
    <li className={styles.newsItem}>
      <a href={url}>{title}</a>
      <p
        style={{
          marginBottom: index === length - 1 ? 0 : undefined,
        }}
      >
        {text}
      </p>
      <div
        className={`${styles.newsBar} ${
          index === length - 1 ? 'hidden' : undefined
        }`}
      ></div>
    </li>
  )
}
