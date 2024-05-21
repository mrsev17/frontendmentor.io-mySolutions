import { useState } from 'react'
import { CustomOption } from './CustomOption'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setQueryType } from '../redux/formSlice'

export const QueryType: React.FC = () => {
  const dispatch = useAppDispatch()
  const getQueryType = useAppSelector((state) => state.form.formData.queryType)
  const [error, setError] = useState<boolean>(false)

  return (
    <div className="flex justify-between gap-4 flex-col">
      <span className="flex gap-2 text-grey leading-150">
        Query Type <span className="text-green">*</span>
      </span>
      <div className="flex gap-4">
        <CustomOption
          id="option1"
          value="option1"
          label="General Enquiry"
          selectedOption={getQueryType}
          setSelectedOption={() => dispatch(setQueryType('option1'))}
        />
        <CustomOption
          id="option2"
          value="option2"
          label="Support Request"
          selectedOption={getQueryType}
          setSelectedOption={() => dispatch(setQueryType('option2'))}
        />
      </div>
      {error && (
        <span className="leading-150 text-red">Please select a query type</span>
      )}
    </div>
  )
}
