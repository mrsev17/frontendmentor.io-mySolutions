export const SocialItem = ({ nameSoc, value }) => {
  return (
    <li className="flex flex-col items-center gap-[9px]">
      <h3 className="text-18 leading-18 text-dark font-bold">{value}</h3>
      <span className="text-10 leading-3 text-grey tracking-[1px]">
        {nameSoc}
      </span>
    </li>
  )
}
