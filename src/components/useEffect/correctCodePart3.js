import React, { useState, useEffect } from 'react'

export default function CorrectCodePart3() {
  const [varA] = useVarA()
  const [varB] = useVarB()

  return (
    <span>
      Var A: {varA}, Var B: {varB}
    </span>
  )
}

function useVarA() {
  const [varA, setVarA] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setVarA(varA + 1), 1000)

    return () => clearTimeout(timeout)
  }, [varA])

  return [varA, setVarA]
}

function useVarB() {
  const [varB, setVarB] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setVarB(varB + 2), 2000)

    return () => clearTimeout(timeout)
  }, [varB])

  return [varB, setVarB]
}
