import { useEffect } from 'react'

const useDidMount = (fn) => useEffect(() => fn && fn(), [])

export default useDidMount
