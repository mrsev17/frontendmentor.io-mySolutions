import { ReactComponent as IconCheck } from '../assets/images/icon-checkbox-check.svg'
import { useAppSelector } from '../hooks/hooks'

interface SubmitProps {
  check: boolean
  onChange: () => void
}

export const Submit = ({ check, onChange }: SubmitProps) => {
  const getConsentError = useAppSelector(
    (state) => state.form.formErrors.consentContactError
  )

  return (
    <div className="flex flex-col gap-[46px]">
      <div className="flex flex-col gap-2">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={onChange}
        >
          <input
            id="consent"
            name="consent"
            checked={check}
            onChange={() => onChange}
            type="checkbox"
            className="h-[18px] w-[18px] focus:ring-[1px] focus:ring-green outline-none rounded-[2px] text-green border-mid-grey"
          />
          <label
            htmlFor="consent"
            className="flex items-center cursor-pointer"
          ></label>
          <span
            id="customCheck"
            className="text-grey leading-[2px] mobile:leading-150"
          >
            I consent to being contacted by the team{' '}
            <span className="text-green">*</span>
          </span>
        </div>
        {getConsentError && (
          <span className="text-red">
            To submit this form, please consent to being contacted
          </span>
        )}
      </div>
      <button
        type="submit"
        className="text-18 leading-150 font-bold py-4 bg-green text-white w-full rounded-lg transition duration-500 hover:bg-[#03402E] outline-grey"
      >
        Submit
      </button>
    </div>
  )
}
