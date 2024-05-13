import { links } from '../data/data'

export const Networks = () => {
  return (
    <ul className="flex items-center gap-[21px] animate-fade">
      {links.map(({ icon, link }, i) => {
        return (
          <li key={i}>
            <a href={link}>{icon}</a>
          </li>
        )
      })}
    </ul>
  )
}
