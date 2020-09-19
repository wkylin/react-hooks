import React, { useRef } from 'react'

function ScrollTo() {
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)

  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <div
      style={{
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <div style={{ position: 'fixed', top: '16px', left: '16px' }}>
        <button onClick={() => scrollTo(section1Ref)}>Section 1</button>
        <br />
        <button onClick={() => scrollTo(section2Ref)}>Section 2</button>
        <br />
        <button onClick={() => scrollTo(section3Ref)}>Section 3</button>
      </div>
      <h1 ref={section1Ref} style={{ height: '100vh', margin: 0 }}>
        Section 1
      </h1>
      <h1 ref={section2Ref} style={{ height: '100vh', margin: 0 }}>
        Section 2
      </h1>
      <h1 ref={section3Ref} style={{ height: '100vh', margin: 0 }}>
        Section 3
      </h1>
    </div>
  )
}

export default ScrollTo
