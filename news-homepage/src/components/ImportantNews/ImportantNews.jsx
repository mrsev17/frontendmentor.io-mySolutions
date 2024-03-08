import { importNews } from '../../utils/data'
import styles from './ImportantNews.module.css'
import global from '../../globalStyles.module.css'

export const ImportantNews = () => {
  return (
    <section className={styles.importantNews}>
      <div className={global.container}>
        <ul className="flex justify-between">
          {importNews.map((news, i) => {
            return (
              <li
                key={i}
                className={`${styles.itemNews} flex justify-beetween gap-6`}
              >
                <img src={news.picture} alt={`Art for ${news.text}`} />
                <div className="flex flex-col gap-3">
                  <span>{news.order}</span>
                  <a href="#">{news.title}</a>
                  <p>{news.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
