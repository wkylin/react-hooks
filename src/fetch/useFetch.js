import { useState, useEffect } from 'react'

const defaultOpts = {}
const useFetch = (input, opts = defaultOpts) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const { readBody = (body) => body.json(), ...init } = opts
  useEffect(() => {
    let canceled = false
    const fetchFn = async () => {
      canceled = false
      setError(new Error(''))
      setLoading(true)
      try {
        const response = await fetch(input, init)
        if (response.ok) {
          const body = await readBody(response)
          if (!canceled) {
            setData(body)
          }
        } else {
          setError(new Error(response.statusText))
        }
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }

    fetchFn()

    return () => (canceled = true)
  }, [input, opts])

  return { error, loading, data }
}

export default useFetch

// console.log(response.headers.get('Content-Type'));

// https://github.com/dai-shi/react-hooks-fetch

// const PostRemoteData = () => {
//   const opts = useMemo(
//     () => ({
//       method: 'POST',
//       body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       }),
//       readBody: (body) => body.text(),
//     }),
//     []
//   )
//   const { error, loading, data } = useFetch('http://...', opts)
//   if (error) return <Err error={error} />
//   if (loading) return <Loading />
//   return <span>Result: {data}</span>
// }
