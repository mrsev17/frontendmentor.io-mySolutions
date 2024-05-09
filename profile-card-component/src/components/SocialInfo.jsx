import { SocialItem } from './SocialItem'

export const SocialInfo = ({ data }) => {
  return (
    <ul className="max-w-[248px] flex justify-between m-auto py-6">
      {data.map((item) => {
        return (
          <SocialItem
            key={item.nameSoc}
            nameSoc={item.nameSoc}
            value={item.value}
          />
        )
      })}
    </ul>
  )
}
