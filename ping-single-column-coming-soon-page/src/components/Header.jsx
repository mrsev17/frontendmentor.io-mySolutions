import { ReactComponent as Logo } from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center mb-[40px]">
      <Logo className="mb-10 tablet:w-[56px] tablet:h-[24px]" />
      <h1 className="text-48 text-grey mb-4 tablet:text-22">
        We are launching <span className="font-bold text-black">soon!</span>
      </h1>
      <span className="text-20 text-black leading-24 tablet:text-12 tablet:leading-15">
        Subscribe and get notified
      </span>
    </header>
  )
}
