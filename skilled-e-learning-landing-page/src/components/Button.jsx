export const Button = ({ text, purpose }) => {
  const defaultClasses = () => {
    if (purpose === 'header') {
      return 'bg-deepDark hover:bg-lilac'
    }
    if (purpose === 'banner') {
      return 'bg-gradient-btn-banner hover:opacity-50'
    }
    if (purpose === 'footer') {
      return 'bg-gradient-btn-footer hover:opacity-50'
    }
  }

  return (
    <button
      className={`${defaultClasses()} text-1 text-white font-bold leading-7 pb-4 pt-[19px] max-w-[167px] w-full rounded-btn transition duration-500`}
    >
      {text}
    </button>
  )
}
