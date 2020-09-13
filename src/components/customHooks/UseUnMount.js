import { useEffect } from 'react'

const useUnmount = (fn) => useEffect(() => () => fn && fn(), [])

export default useUnmount
