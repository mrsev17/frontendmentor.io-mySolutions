import Spotify from '../assets/images/desktop/spotify.svg'
import Apple from '../assets/images/desktop/apple-podcast.svg'
import Google from '../assets/images/desktop/google-podcasts.svg'
import Pocket from '../assets/images/desktop/pocket-casts.svg'

const companiesData = [Spotify, Apple, Google, Pocket]

export const Companies = () => {
  return (
    <ul className="flex justify-between items-center max-w-[540px] opacity-50">
      {companiesData.map((company, i) => {
        return (
          <li key={i}>
            <img
              className="mobile:max-w-[72px]"
              src={company}
              alt={`Company ${i + 1}`}
            />
          </li>
        )
      })}
    </ul>
  )
}
