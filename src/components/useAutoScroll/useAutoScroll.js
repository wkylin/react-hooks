import React, { useRef, useEffect, useState } from 'react'

export function useAutoScroll(length) {
  const elementRef = useRef(null)
  const prevLengthRef = useRef(length)
  const prevLength = prevLengthRef.current
  useEffect(() => {
    prevLengthRef.current = length
    if (prevLength < length) {
      elementRef.current.scrollTop = elementRef.current.scrollHeight
    }
  }, [length])

  return elementRef
}

export function View2() {
  const [dropdowns, setDropdowns] = useState([])
  const containerRef = useAutoScroll(dropdowns.length)

  const addDropdown = () => {
    setDropdowns(() => [
      ...dropdowns,
      { label: `Dropdown number ${dropdowns.length}` },
    ])
  }

  return (
    <div className="view-container">
      <div ref={containerRef} className="inputs-container">
        {dropdowns.map(({ label }) => (
          <div key={label} className="input-container">
            <label>{label}</label>
            <select>
              <option>opt 1</option>
              <option>opt 2</option>
            </select>
          </div>
        ))}
      </div>
      <div className="add-input-btn" onClick={addDropdown}>
        Add Input
      </div>
    </div>
  )
}
