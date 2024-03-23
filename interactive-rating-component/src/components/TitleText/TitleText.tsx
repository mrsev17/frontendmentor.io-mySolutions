import styles from './TitleText.module.css'

interface TitleTextProps {
  title: string
  text: string
  textCenter: boolean
}

export const TitleText: React.FC<TitleTextProps> = ({
  title,
  text,
  textCenter,
}) => {
  return (
    <div
      className={`${styles.titleText} flex flex-col mb-6 ${
        textCenter ? 'text-center' : null
      }`}
    >
      <h1 className="font-bold text-neutral-50">{title}</h1>
      <p>{text}</p>
    </div>
  )
}
