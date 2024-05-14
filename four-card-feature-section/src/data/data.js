import { ReactComponent as Supervisor } from '../assets/images/icon-supervisor.svg'
import { ReactComponent as Builder } from '../assets/images/icon-team-builder.svg'
import { ReactComponent as Karma } from '../assets/images/icon-karma.svg'
import { ReactComponent as Calculator } from '../assets/images/icon-calculator.svg'

export const cardsData = [
  {
    title: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks',
    icon: <Supervisor />,
    color: 'bg-[#44D3D2]',
  },
  {
    title: 'Team Builder',
    text: 'Scans our talent network to create the optimal team for your project',
    icon: <Builder />,
    color: 'bg-[#EA5454]',
  },
  {
    title: 'Karma',
    text: 'Regularly evaluates our talent to ensure quality',
    icon: <Karma />,
    color: 'bg-[#FCAE4A]',
  },
  {
    title: 'Calculator',
    text: 'Uses data from past projects to provide better delivery estimates',
    icon: <Calculator />,
    color: 'bg-[#549EF2]',
  },
]
