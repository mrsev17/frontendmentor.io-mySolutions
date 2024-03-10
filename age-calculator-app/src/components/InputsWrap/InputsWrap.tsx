import { FormEvent } from 'react'
import { useState } from 'react'
import style from './InputsWrap.module.css'
import { useAppSelector } from '../../hooks'

export const InputsWrap = () => {
  // const getInputs = useAppSelector((state) => state.ageCalculator)
  //
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   console.log('Form submitted with values:', day, month, year)
  // }
  return (
    <form className={style.inputsWrap}>
      <div className={style.inputItem}>
        <label htmlFor="day">Day</label>
        <input
          type="text"
          id="day"
          value={day}
          placeholder="DD"
          onChange={(e) => setDay(e.target.value)}
          maxLength={2}
        />
        <span>Error</span>
      </div>
      <div className={style.inputItem}>
        <label htmlFor="month">Month</label>
        <input
          type="text"
          id="month"
          value={month}
          placeholder="MM"
          onChange={(e) => setMonth(e.target.value)}
          maxLength={2}
        />
        <span>Error</span>
      </div>
      <div className={style.inputItem}>
        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          value={year}
          placeholder="YYYY"
          onChange={(e) => setYear(e.target.value)}
          maxLength={4}
        />
        <span>Error</span>
      </div>
      {/* <button type="submit">Submit</button> */}
    </form>
  )
}
