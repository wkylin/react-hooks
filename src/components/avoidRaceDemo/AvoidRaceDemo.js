import React, { Fragment, useState, useEffect } from 'react'
const fakeFetch = (person) => {
  return new Promise((res) => {
    setTimeout(() => res(`${person}'s data`), Math.random() * 5000)
  })
}
const AvoidRaceDemo = () => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  const [person, setPerson] = useState(null)
  useEffect(() => {
    let canceled = false
    setLoading(true)
    fakeFetch(person).then((res) => {
      if (!canceled) {
        setData(res)
        setLoading(false)
      }
    })
    return () => (canceled = true)
  }, [person])
  return (
    <Fragment>
      <button onClick={() => setPerson('Nick')}>Nick Profile</button>
      <button onClick={() => setPerson('Deb')}>Deb Profile</button>
      <button onClick={() => setPerson('Joe')}>Joe Profile</button>
      {person && (
        <Fragment>
          <h1>{person}</h1>
          <p>{loading ? 'Loading...' : data}</p>
        </Fragment>
      )}
    </Fragment>
  )
}
export default AvoidRaceDemo
