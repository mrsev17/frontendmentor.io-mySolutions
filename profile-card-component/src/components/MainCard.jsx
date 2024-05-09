import { PersonalInfo } from './PersonalInfo'
import { SocialInfo } from './SocialInfo'
import { userData } from '../data/data'
import { ReactComponent as TopPattern } from '../assets/bg-pattern-card.svg'

export const MainCard = () => {
  return (
    <section className="max-w-main w-full bg-white shadow-card rounded-[15px]">
      <TopPattern className="rounded-t-[15px]" />
      <div className="relative mb-[66px]">
        <img
          className="w-[101px] h-[101px] border-[5px] border-white m-auto rounded-full absolute top-[-48px] left-1/2 -translate-x-1/2"
          src={userData.photo}
          alt={userData.personalInfo.user}
        />
      </div>
      <PersonalInfo
        user={userData.personalInfo.user}
        age={userData.personalInfo.age}
        location={userData.personalInfo.location}
      />
      <div className="h-px w-full bg-light-grey"></div>
      <SocialInfo data={userData.socialData} />
    </section>
  )
}
