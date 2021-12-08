import * as React from 'react'
import { TUseClickOutside } from './index.types'

const useClickOutside: TUseClickOutside = (
  isOpen,
  setIsOpen,
  rootRef,
  active: boolean = true
) => {
  React.useEffect(() => {
    const clickOutsideEvent = (event) => {
      if (!active) return
      if (!rootRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    const closeDropdown = () => {
      setIsOpen(false)
    }
    if (isOpen) {
      window.addEventListener('mousedown', clickOutsideEvent)
      window.addEventListener('blur', closeDropdown)
      return () => {
        window.removeEventListener('mousedown', clickOutsideEvent)
        window.removeEventListener('blur', closeDropdown)
      }
    }
  }, [isOpen, setIsOpen, active])

  return null
}

export default useClickOutside
