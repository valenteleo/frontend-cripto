import { useEffect, useState } from 'react'

export function useDebounce (onCallback: (t: string) => void, { timeout = 1000 } = { }) {
  const [currentFunction, setCurrentFunction] = useState<NodeJS.Timeout | undefined>()
  const [currentInput, setCurrentInput] = useState('')

  useEffect(() => {
    clearTimeout(currentFunction)
    setCurrentFunction(setTimeout(() => { onCallback(currentInput) }, timeout))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentInput])

  return { setCurrentInput }
}
