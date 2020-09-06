import React, { useState, useEffect } from 'react'

export default function CorrectCodePart1() {
  const [varA, setVarA] = useState(0)
  const [varB, setVarB] = useState(0)
  // Don't do this!
  useEffect(() => {
    const timeoutA = setTimeout(() => setVarA(varA + 1), 1000)
    const timeoutB = setTimeout(() => setVarB(varB + 2), 2000)

    return () => {
      clearTimeout(timeoutA)
      clearTimeout(timeoutB)
    }
  }, [varA, varB])

  return (
    <span>
      Var A: {varA}, Var B: {varB}
    </span>
  )
}
