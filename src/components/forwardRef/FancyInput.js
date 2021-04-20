import React, {
  useRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from 'react'

function FancyInput(props, ref) {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.value = 'Hello'
    },
  }))
  return <input ref={inputRef} />
}

const FancyInputCom = forwardRef(FancyInput)

const FancyInputParent = () => {
  let ref = useRef(null)
  useEffect(() => {
    console.log(ref)
    ref.current.focus()
  })
  return (
    <>
      <FancyInputCom ref={ref} />
    </>
  )
}

export default FancyInputParent


// https://hamidrezanazemi.medium.com/calling-childs-function-from-parent-with-react-hooks-f3209193657d