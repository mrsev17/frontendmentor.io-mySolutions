import { Button } from './Button'
import { LogoLight } from './SVGs'

export const Footer = () => {
  return (
    <footer className="bg-deepDark flex justify-center">
      <div className="max-w-content flex justify-between items-center w-full py-8">
        <LogoLight />
        <Button text="Get Started" purpose="footer" />
      </div>
    </footer>
  )
}
