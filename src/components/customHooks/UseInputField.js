import { useState } from 'react'

const useInputField = (initial) => {
  const [value, setValue] = useState(initial)

  return {
    value,
    setValue,
    resetValue: () => setValue(initial),
    bindProps: {
      value,
      onChange: (e) => setValue(e.target.value),
    }
  }
}

export default useInputField
