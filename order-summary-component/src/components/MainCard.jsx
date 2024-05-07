import HeroImg from '../assets/illustration-hero.svg'
import { Payment } from './Payment'
import { Plan } from './Plan'
import { TextInfo } from './TextInfo'

const infoData = {
  title: 'Order Summary',
  text: 'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!',
}

export const MainCard = () => {
  return (
    <section className="bg-white rounded-[20px] max-sm:mx-6 max-sm:mt-12">
      <img className="rounded-t-[20px]" src={HeroImg} alt="Hero" />
      <div className="px-12 pb-12 pt-[45px] max-sm:py-8">
        <TextInfo title={infoData.title} text={infoData.text} />
        <Plan />
        <Payment />
      </div>
    </section>
  )
}
