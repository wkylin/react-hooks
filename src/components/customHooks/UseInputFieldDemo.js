import React from 'react'

import useInputField from './UseInputField'

const UseInputFieldDemo = () => {
  const { value, bindProps } = useInputField('hello')

  return (
    <div>
      Input text: {value}
      <div>
        <input type="text" {...bindProps} />
      </div>
    </div>
  )
}

export default UseInputFieldDemo
