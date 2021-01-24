import React from 'react';

const useScrollListener = ( element, handleScroll, throttle = 5000 ) => {
  const scrollingTimer = React.useRef()
  const listenToScroll = React.useCallback(
    (e) => {
      element.current?.removeEventListener('scroll', listenToScroll) // unregister the event
      clearTimeout(scrollingTimer.current) // clear previous timeout instance
      scrollingTimer.current = setTimeout(
        () => element.current?.addEventListener('scroll', listenToScroll), // re-register the event after a certain time
        throttle
      )
      handleScroll(e) // call the handler logic (this is asyncchronous and will not wait for the setTimeout to run!)
    },
    [throttle, element, handleScroll]
  )

  React.useEffect(() => {
    const currentElement = element.current
    if (currentElement) {
      currentElement.addEventListener('scroll', listenToScroll)
    }
    return () => {
      currentElement?.removeEventListener('scroll', listenToScroll)
      clearTimeout(scrollingTimer.current)
    }
  }, [listenToScroll, element])
}

export default useScrollListener;
