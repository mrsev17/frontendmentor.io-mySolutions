import { Button } from './Button'
import { LogoDark } from './SVGs'

export const Header = () => {
  return (
    <header className="flex justify-between items-center mt-[38px]">
      <LogoDark />
      <Button text="Get Started" purpose="header" />
    </header>
  )
}
