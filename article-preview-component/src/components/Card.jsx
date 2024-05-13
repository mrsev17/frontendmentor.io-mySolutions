import { MainInfo } from './MainInfo'
import Draw from '../assets/images/drawers.jpg'
import { UserInfo } from './UserInfo'

const data = {
  title:
    'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
  text: 'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.',
  accentImage: Draw,
}

export const Card = () => {
  return (
    <section className="max-w-content w-full h-[280px] bg-white rounded-[10px] flex">
      <img
        className="max-w-[285px] max-h-[280px] h-full rounded-l-[10px]"
        src={data.accentImage}
        alt="Draw"
      />
      <div className="py-8 px-10 flex flex-col gap-5">
        <MainInfo title={data.title} text={data.text} />
        <UserInfo />
      </div>
    </section>
  )
}
