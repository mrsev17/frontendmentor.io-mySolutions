import { Logo, Facebook, Instagram, Twitter } from './SVGs'

const network = [
  {
    icon: <Facebook />,
    url: '#',
    source: 'facebook',
  },
  {
    icon: <Instagram />,
    url: '#',
    source: 'instagram',
  },
  {
    icon: <Twitter />,
    url: '#',
    source: 'twitter',
  },
]

export const Footer = () => {
  return (
    <footer className="max-w-content mx-auto px-4 flex justify-between items-center tablet:items-end iphone:items-baseline iphone:flex-col iphone:gap-16">
      <div className="flex justify-between max-w-[650px] w-full tablet:flex-col tablet:gap-8">
        <Logo />
        <p className="max-w-[50%] leading-26 text-dark">
          All rights reserved © Equalizer 2021 Have any problems? Contact us via
          social media or email us at
          <a href="mailto:equalizer@example.com">
            <strong> equalizer@example.com</strong>
          </a>
        </p>
      </div>
      <ul className="flex gap-5 items-center">
        {network.map((link) => {
          return (
            <li key={link.source}>
              <a className="w-[20px] h-[20px]" href={link.url}>
                {link.icon}
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
