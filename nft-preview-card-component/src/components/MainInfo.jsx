import ProductImage from '../assets/image-equilibrium.jpg'
import { CardHover } from './CardHover'

const infoData = {
  icon: ProductImage,
  title: 'Equilibrium #3429',
  text: 'Our Equilibrium collection promotes balance and calm.',
  link: '#',
}

export const MainInfo = () => {
  return (
    <div className="mb-6">
      <div className="relative cursor-pointer">
        <img
          className="rounded-lg max-w-[302px] max-h-[302px] mb-6"
          src={infoData.icon}
          alt="Product"
        />
        <CardHover />
      </div>

      <h1 className="text-white text-[1.375rem] font-semibold leading-7 mb-4">
        <a
          className="hover:text-toxicGreen transition duration-500"
          href={infoData.link}
        >
          {infoData.title}
        </a>
      </h1>
      <p className="text-softBlue text-[1.125rem] font-light leading-[26px]">
        {infoData.text}
      </p>
    </div>
  )
}
