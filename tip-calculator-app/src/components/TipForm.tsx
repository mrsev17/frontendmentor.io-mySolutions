import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setBill, setNumberOfPeople } from '../redux/tipCalculatorSlice'
import { Container, InputTip, TipOptions } from '../components'
import { Dollar, Person } from '../components/SVGs'

export const TipForm = () => {
  const dispatch = useAppDispatch()
  const getBill = useAppSelector((state) => state.calculatorTip.bill)

  const getNumberPeople = useAppSelector(
    (state) => state.calculatorTip.numberOfPeople
  )

  // const billHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const bill = e.target.value
  //   const sanitizedValue = bill.replace(/[^0-9.]/g, '')
  //   if (+sanitizedValue[0] !== 0) dispatch(setBill(sanitizedValue))
  // }

  const billHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bill = e.target.value
    const regex = /^\d*\.?\d*$/
    if (!regex.test(bill)) {
      const sanitizedValue = bill.replace(/[^\d.]/g, '')
      const dotIndex = sanitizedValue.indexOf('.')
      if (dotIndex !== -1) {
        const beforeDot = sanitizedValue.substring(0, dotIndex)
        const afterDot = sanitizedValue.substring(dotIndex + 1)
        const sanitizedString = beforeDot + '.' + afterDot.replace(/\./g, '')
        dispatch(setBill(sanitizedString))
      } else {
        dispatch(setBill(sanitizedValue))
      }
    } else {
      dispatch(setBill(bill))
    }
  }

  const peopleHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value
    const sanitizedValue = number.replace(/[^0-9]/g, '')
    if (+sanitizedValue[0] !== 0) dispatch(setNumberOfPeople(sanitizedValue))
  }

  return (
    <Container className="max-w-[379px] flex flex-col justify-between min-h-[388px] h-full max-lg:max-w-full max-lg:gap-8">
      <InputTip
        label="Bill"
        placeholder="0"
        value={getBill.value + ''}
        onChange={(e) => billHandle(e)}
        error={getBill.error}
      >
        <Dollar />
      </InputTip>
      <TipOptions />
      <InputTip
        label="Number of People"
        placeholder="0"
        value={getNumberPeople.value + ''}
        onChange={(e) => peopleHandle(e)}
        error={getBill.error}
      >
        <Person />
      </InputTip>
    </Container>
  )
}
