import { Card } from './Card'
import { cardsData } from '../data/data'

export const CardsWrapper = () => {
  return (
    <div className="max-w-content w-full h-[530px] mx-auto flex justify-between items-center tablet:flex-col tablet:gap-[23px] tablet:h-auto">
      <Card
        title={cardsData[0].title}
        text={cardsData[0].text}
        icon={cardsData[0].icon}
        color={cardsData[0].color}
      />
      <div className="flex flex-col justify-between gap-[30px] tablet:gap-[24px]">
        <Card
          title={cardsData[1].title}
          text={cardsData[1].text}
          icon={cardsData[1].icon}
          color={cardsData[1].color}
        />
        <Card
          title={cardsData[2].title}
          text={cardsData[2].text}
          icon={cardsData[2].icon}
          color={cardsData[2].color}
        />
      </div>
      <Card
        title={cardsData[3].title}
        text={cardsData[3].text}
        icon={cardsData[3].icon}
        color={cardsData[3].color}
      />
    </div>
  )
}
