import { useState, useEffect } from 'react'
import { DividerMobile, DividerDesktop } from './SVGs'

export const Divider = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 567)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="flex justify-center">
      {isMobile ? <DividerMobile /> : <DividerDesktop />}
    </div>
  )
}
