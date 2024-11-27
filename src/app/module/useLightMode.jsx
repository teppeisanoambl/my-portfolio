import { useState, useEffect } from 'react'

const useLightMode = () => {
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  }, [isLightMode])

  const toggleLightMode = () => {
    setIsLightMode(prevState => !prevState)
  }

  return {
    isLightMode,
    toggleLightMode
  }
}

export default useLightMode