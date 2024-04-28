export const Container = ({ children, className }) => {
  const defaultClasses = ''

  const combinedClasses = className
    ? `${defaultClasses} ${className}`
    : defaultClasses

  return <div className={combinedClasses}>{children}</div>
}
