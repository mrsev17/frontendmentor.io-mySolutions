import { ReactComponent as Logo } from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className="mb-[50px]">
      <Logo className="tablet:w-[120px] tablet:h-[19px]" />
    </header>
  )
}
