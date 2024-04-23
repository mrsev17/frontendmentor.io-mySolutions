import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  const defaultClasses: string = ''

  const combinedClasses: string = className
    ? `${defaultClasses} ${className}`
    : defaultClasses

  return <div className={combinedClasses}>{children}</div>
}
