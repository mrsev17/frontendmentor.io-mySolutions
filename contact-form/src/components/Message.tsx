interface MessageProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Message = ({ value, onChange }: MessageProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="message" className="flex gap-2 text-grey leading-150">
        Message <span className="text-green">*</span>
      </label>
      <textarea
        id="message"
        value={value}
        onChange={(e) => onChange(e)}
        className={`focus:border-green transition duration-500 text-18 leading-150 text-grey border border-mid-grey rounded-lg resize-none outline-none h-[105px] py-3 px-6`}
      />
      {/* <span className="leading-150 text-red">This field is required</span> */}
    </div>
  )
}
