import { Button } from './Button'

export const ProductInfo = ({
  category,
  title,
  description,
  price,
  priceDiscount,
}) => {
  return (
    <div className="p-8">
      <span className="block mb-5 text-[12px] leading-[15px] tracking-[15px] font-medium font-['Montserrat'] text-sub">
        {category}
      </span>
      <h1 className="mb-6 text-[32px] leading-[32px] font-bold">{title}</h1>
      <p className="mb-[29px] text-[14px] leading-[23px] font-medium text-sub font-['Montserrat']">
        {description}
      </p>
      <div className="mb-[30px] flex items-center gap-[19px]">
        <h2 className="text-[32px] leading-[32px] font-bold text-accent-green">
          {priceDiscount}
        </h2>
        <span className="text-[13px] leading-[23px] font-medium line-through text-sub font-['Montserrat']">
          {price}
        </span>
      </div>
      <Button text="Add to cart" />
    </div>
  )
}
