import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { setSuccess } from '../redux/formSlice'
import { ReactComponent as SuccessIcon } from '../assets/images/icon-success-check.svg'

export const Success = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSuccess())
    }, 3000)

    return () => clearTimeout(timer)
  }, [dispatch])

  return (
    <div className="py-6 px-[26px] rounded-xl absolute top-[3%] bg-grey flex flex-col gap-2 animate-notificationIn opacity-0 tablet:max-w-[90%]">
      <div className="flex items-center gap-[10px]">
        <SuccessIcon />
        <span className="text-18 text-white font-bold leading-[150%] block">
          Message Sent!
        </span>
      </div>
      <span className="block leading-[150%] text-salad">
        Thanks for completing the form. We’ll be in touch soon!
      </span>
    </div>
  )
}
