import TimerIcon from '../assets/icon-clock.svg'

const timerData = {
  icon: TimerIcon,
  count: 3,
}

export const Timer = () => {
  return (
    <div className="flex items-center gap-[9px]">
      <img src={timerData.icon} alt="Timer" />
      <h3 className="text-softBlue leading-5">{timerData.count} days left</h3>
    </div>
  )
}
