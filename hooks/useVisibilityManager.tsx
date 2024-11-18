import { useState, useCallback } from 'react'

const useVisibilityManager = () => {
  const [visibleStates, setVisibleStates] = useState({
    delVisible: false,
    clearVisible: false,
    outVisible: false,
  })

  const setVisibility = useCallback(
    (key: keyof typeof visibleStates, value: boolean) => {
      setVisibleStates((prev) => ({
        ...prev,
        [key]: value,
      }))
    },
    []
  )

  const open = useCallback(
    (key: keyof typeof visibleStates) => {
      setVisibility(key, true)
    },
    [setVisibility]
  )

  const close = useCallback(
    (key: keyof typeof visibleStates) => {
      setVisibility(key, false)
    },
    [setVisibility]
  )

  return {
    ...visibleStates,
    open,
    close,
  }
}

export default useVisibilityManager
