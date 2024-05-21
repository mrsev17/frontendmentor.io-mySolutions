import { ReactComponent as IconCheck } from '../assets/images/icon-checkbox-check.svg'
import { useAppSelector } from '../hooks/hooks'

interface SubmitProps {
  check: boolean
  onChange: () => void
}

export const Submit = ({ check, onChange }: SubmitProps) => {
  const getConsentError = useAppSelector(
    (state) => state.form.formErrors.errors.consentContactError
  )

  return (
    <div className="flex flex-col gap-[46px]">
      <div className="flex flex-col gap-2">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={onChange}
        >
          <label
            htmlFor="consent"
            className={`${
              check ? '!border-green' : ''
            } h-[18px] w-[18px] border border-mid-grey rounded-[4px] flex flex-col justify-center items-center`}
          >
            <IconCheck className={`${check ? 'block' : 'hidden'}`} />
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={check}
              onChange={() => onChange}
              className=""
            />
          </label>
          <span id="customCheck" className="text-grey leading-[2px]">
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
        className="text-18 leading-150 font-bold py-4 bg-green text-white w-full rounded-lg transition duration-500 hover:bg-[#03402E]"
      >
        Submit
      </button>
    </div>
  )
}
