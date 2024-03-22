import styles from './Button.module.css'

interface ButtonProps {
  text: string
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className={`${styles.Button} uppercase font-bold text-neutral-50 hover:bg-neutral-50 w-full`}
    >
      {text}
    </button>
  )
}
