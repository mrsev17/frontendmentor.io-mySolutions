import { useState } from 'react'
import { ItemFaq } from './ItemFaq'
import { faqData } from '../data/data'

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(1)

  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }
  return (
    <ul className="flex flex-col gap-[18px] w-full">
      {faqData.map((item, index) => {
        return (
          <ItemFaq
            key={item.title}
            title={item.title}
            content={item.content}
            isOpen={index === openIndex}
            onClick={() => handleItemClick(index)}
          />
        )
      })}
    </ul>
  )
}
