import { networks } from '../data/networks'

export const Footer = () => {
  return (
    <footer className="flex justify-end tablet:justify-center">
      <ul className="flex gap-4 tablet:gap-[10px]">
        {networks.map((social, i) => {
          return (
            <li
              key={i}
              className="border borer-white rounded-full group transition duration-500 hover:border-icons"
            >
              <a
                className="text-white text-24 p-[7px] block transition duration-500 group-hover:text-icons"
                href={social.link}
              >
                {social.icon}
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
