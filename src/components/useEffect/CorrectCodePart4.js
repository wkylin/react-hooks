import React, { useState, useEffect } from 'react'

export default function CorrectCodePart4() {
  const [varA, setVarA] = useState(0)

  useEffect(() => {
    if (varA >= 5) return

    const timeout = setTimeout(() => setVarA(varA + 1), 1000)

    return () => clearTimeout(timeout)
  }, [varA])

  return <span>Var A: {varA}</span>
}
