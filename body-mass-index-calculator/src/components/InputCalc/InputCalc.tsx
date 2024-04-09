import styles from './InputCalc.module.scss'

interface InputCalcProps {
  textLabel?: string
  placeholder: string
  value: number
  point: string
  actChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputCalc: React.FC<InputCalcProps> = ({
  textLabel,
  placeholder,
  value,
  point,
  actChange,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={textLabel}>
        {textLabel?.length ? textLabel : <span>-</span>}
      </label>
      <div className={styles.inputSub}>
        <input
          type="text"
          id={textLabel}
          value={value === 0 ? '' : value}
          placeholder={placeholder}
          onChange={actChange}
        />
        <span>{point}</span>
      </div>
    </div>
  )
}
