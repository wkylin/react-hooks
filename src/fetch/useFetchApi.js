import { useState, useEffect } from 'react'

// useEffect(() => {
//   let ignore = false;
//   const fetchUserData = async () => {
//     const response = await API.getUserData(userId);
//     if (!ignore) {
//       setUserData(response.userData);
//     }
//   };
//   fetchUserData();
//   return () => {
//     ignore = true;
//   };
// }, [userId]);

function useFetch(url, opts) {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(url, opts)
      .then((res) => {
        setResponse(res.data)
        setLoading(false)
      })
      .catch(() => {
        setHasError(true)
        setLoading(false)
      })
  }, [url])
  return [response, loading, hasError]
}

export default useFetch
