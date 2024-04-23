import { Values } from './Values'

export const Content = () => {
  return (
    <div className="lg:pr-[95px] lg:pb-[48px] lg:pl-[72px] lg:pt-[71px] max-lg:pl-[32px] max-lg:pr-[32px] max-lg:pb-[32px]">
      <h1 className="text-white text-[36px] font-bold leading-title mb-4 lg:mb-[25px] max-lg:text-center">
        Get <span className="text-deepPurple">insights</span> that help your
        business grow.
      </h1>
      <p className="text-white opacity-75 text-[15px] leading-text mb-[40px] lg:mb-[72px] max-lg:text-center">
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
      <Values />
    </div>
  )
}
