import React, { useEffect, Prompt } from 'react'

const PromptIndex = () => {
  useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    window.addEventListener('unload', handleEndConcert)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
      window.removeEventListener('unload', handleEndConcert)
      handleEndConcert()
    }
  }, [])

  const isPrompt = () => {
    return false
  }
  const alertUser = (e) => {
    e.preventDefault()
    e.returnValue = ''
  }
  // const handleEndConcert = async () => {
  // await fetcher({
  //   url: endConcert(concert.id),
  //   method: 'PUT',
  // })
  // }

  const handleEndConcert = () => {
    console.log('end')
  }
  return (
    <Prompt
      when={isPrompt()}
      message={() => 'Are you sure you want to leave this page?'}
    />
  )
}

export default PromptIndex
