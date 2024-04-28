import { Course } from './Course'
import { Animation, Business, Design, Crypto, Photography } from './SVGs'

const coursesData = [
  {
    icon: <Animation />,
    title: 'Animation',
    text: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    link: '#',
  },
  {
    icon: <Design />,
    title: 'Design',
    text: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
    link: '#',
  },
  {
    icon: <Photography />,
    title: 'Photography',
    text: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    link: '#',
  },
  {
    icon: <Crypto />,
    title: 'Crypto',
    text: 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
    link: '#',
  },
  {
    icon: <Business />,
    title: 'Business',
    text: 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    link: '#',
  },
]

export const Courses = () => {
  return (
    <section className="bg-custom w-full m-auto overflow-hidden relative min-h-[820px] pb-[86px] iphone:pb-20 tablet:px-[39px] tablet:min-h-[520px] iphone:px-4">
      <ul className="pt-10 max-w-content w-full m-auto grid grid-cols-3 gap-[30px] gap-y-[60px] tablet:grid-cols-2 iphone:grid-cols-1">
        <div className="w-[350px] h-[322px] bg-gradient-btn-banner rounded-[15px] pt-16 iphone:pt-6 pl-8  tablet:h-[259px] tablet:w-[340px] iphone:w-full iphone:max-h-[120px]">
          <h2 className="text-32 text-white font-extrabold leading-10 max-w-[80%] tablet:text-24 tablet:leading-8">
            Check out our most popular courses!
          </h2>
        </div>
        {coursesData.map((course) => {
          return (
            <Course
              key={course.title}
              icon={course.icon}
              title={course.title}
              text={course.text}
              link={course.link}
            />
          )
        })}
      </ul>
    </section>
  )
}
