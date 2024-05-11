export const GalleryItem = ({ pic, index }) => {
  return (
    <li className="rounded-lg justify-self-center">
      <img
        src={pic}
        alt={`People use meet ${index + 1}`}
        className="max-w-[255px] max-h-[242px] tablet:max-w-[164px] tablet:max-h-[156px] rounded-lg"
      />
    </li>
  )
}
