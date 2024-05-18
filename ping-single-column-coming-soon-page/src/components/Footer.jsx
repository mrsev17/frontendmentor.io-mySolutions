import { networks } from '../data/networks'

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-[25px]">
      <ul className="flex justify-center gap-3">
        {networks.map((social, i) => {
          return (
            <li key={i}>
              <a
                className="text-[1.25rem] p-3 text-blue border border-sky rounded-full block hover:text-white hover:bg-blue transition duration-500"
                href={social.link}
              >
                {social.icon}
              </a>
            </li>
          )
        })}
      </ul>
      <p className="text-12 text-grey leading-15">
        &copy; Copyright Ping. All rights reserved.
      </p>
    </footer>
  )
}
