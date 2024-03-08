import { NewsItem } from '../NewsItem/NewsItem'
import { dataNew } from '../../utils/data'
import styles from './NewsPanel.module.css'

export const NewsPanel = () => {
  return (
    <div className={`${styles.newsPanel} flex flex-col justify-between`}>
      <h2>New</h2>
      <ul>
        {dataNew.map((news, i) => {
          return (
            <NewsItem
              key={i}
              url={news.url}
              text={news.text}
              title={news.title}
              index={i}
              length={dataNew.length}
            />
          )
        })}
      </ul>
    </div>
  )
}
