import { ReviewItem } from './ReviewItem'
import { reviewsData } from '../data/data'

export const Reviews = () => {
  return (
    <section className="flex justify-between max-h-[266px] h-full lg:flex-col lg:gap-4 tablet:max-h-[100%]">
      {reviewsData.map(({ image, user, review, className }) => {
        return (
          <ReviewItem
            key={user}
            image={image}
            user={user}
            review={review}
            className={className}
          />
        )
      })}
    </section>
  )
}
