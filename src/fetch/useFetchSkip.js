import { useState, useEffect } from 'react'

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const useFetch = (initialUrl, initialParams = {}, skip = false) => {
  const [url, updateUrl] = useState(initialUrl)
  const [params, updateParams] = useState(initialParams)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [refetchIndex, setRefetchIndex] = useState(0)
  const queryString = Object.keys(params)
    .map(
      (key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    )
    .join('&')
  const refetch = () =>
    setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1)
  useEffect(() => {
    const fetchData = async () => {
      if (skip) return
      setIsLoading(true)
      try {
        const response = await fetch(`${url}${queryString}`)
        const result = await response.json() // response.blob(); response.text();
        if (response.ok) {
          setData(result)
        } else {
          setHasError(true)
          setErrorMessage(result)
        }
      } catch (err) {
        setHasError(true)
        setErrorMessage(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url, params, refetchIndex])
  return {
    data,
    isLoading,
    hasError,
    errorMessage,
    updateUrl,
    updateParams,
    refetch,
  }
}
export default useFetch
