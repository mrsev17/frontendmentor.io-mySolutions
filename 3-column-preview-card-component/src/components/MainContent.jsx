import { Card } from '../components/Card'
import { data } from '../data/data'

export const MainContent = () => {
  return (
    <section className="rounded-lg max-w-[920px] w-full bg-white max-sm:px-6 max-sm:py-6">
      <ul className="flex max-sm:flex-col">
        {data.map(({ icon, title, text, link }, index) => {
          return (
            <Card
              index={index}
              key={title}
              icon={icon}
              title={title}
              text={text}
              link={link}
            />
          )
        })}
      </ul>
    </section>
  )
}
