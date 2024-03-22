import styles from './TitleText.module.css'

interface TitleTextProps {
  title: string
  text: string
}

export const TitleText: React.FC<TitleTextProps> = ({ title, text }) => {
  return (
    <div className={`${styles.titleText} flex flex-col mb-6`}>
      <h1 className="font-bold text-neutral-50">{title}</h1>
      <p>{text}</p>
    </div>
  )
}
