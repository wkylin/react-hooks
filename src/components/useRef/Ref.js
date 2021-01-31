import React, { useState, useRef, useEffect } from 'react';


const Reference = () => {
  const [name, setName] = useState('Mehdi')
  const previousName = useRef(null)

  useEffect(() => {
    previousName.current = name
  }, [name])

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        <div>Input pre value: {previousName.current}</div>

        <div>Input current value: {name}</div>
      </div>
    </>
  )
}

export default Reference;