import Etherium from '../assets/icon-ethereum.svg'

const priceData = {
  icon: Etherium,
  price: 0.041,
}

export const Price = () => {
  return (
    <div className="flex items-center gap-[6px]">
      <img src={priceData.icon} alt="Crypto" />
      <h3 className="text-toxicGreen font-semibold leading-5">
        {priceData.price} ETH
      </h3>
    </div>
  )
}
