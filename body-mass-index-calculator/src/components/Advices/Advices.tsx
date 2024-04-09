import { IconEating, IconExcercises, IconSleep } from '../SVGs'
import styles from './Advices.module.scss'

export const Advices = () => {
  const dataAdvices = [
    {
      icon: <IconEating />,
      title: 'Healthy eating',
      text: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
    },
    {
      icon: <IconExcercises />,
      title: 'Regular exercise',
      text: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
    },
    {
      icon: <IconSleep />,
      title: 'Adequate sleep',
      text: 'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
    },
  ]
  return (
    <section className={`${styles.advices} container`}>
      <div className={`${styles.advicesWrapper} nested-container`}>
        <ul>
          {dataAdvices.map((advice) => {
            return (
              <li key={advice.title}>
                <span>{advice.icon}</span>
                <div>
                  <h4>{advice.title}</h4>
                  <p>{advice.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
