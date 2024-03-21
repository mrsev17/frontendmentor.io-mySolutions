import { BtnConsulation } from '../BtnConsultation'
import styles from './CallWithMe.module.css'

export const CallWithMe = () => {
  return (
    <section
      className={`${styles.callWithMe} container flex flex-col sm:flex-row sm:px-4 lg:max-w-1110 xl:max-w-1110 items-center`}
    >
      <div
        className={`${styles.callWithMeWrap} flex flex-col md:flex-row items-center`}
      >
        <div className="text-center sm:text-start ">
          <h4 className="font-bold">Book a call with me</h4>
          <p className="font-medium ">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <BtnConsulation bgColor={`#EB7565`} bgHoverColor={`#F6A560`} />
      </div>
    </section>
  )
}
