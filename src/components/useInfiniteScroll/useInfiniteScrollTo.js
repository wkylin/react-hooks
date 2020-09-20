import React from 'react'

function useInfiniteScrollTo(api) {
  const elementRef = React.useRef()
  const [items, setItems] = React.useState([])
  const [isBottom, setIsBottom] = React.useState(true)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function loadItems() {
      setLoading(true)
      const itemList = await api()
      setItems((prev) => prev.concat(itemList))
      setLoading(false)
    }
    if (isBottom) {
      loadItems()
      setIsBottom(false)
    }
  }, [isBottom])

  const handleScroll = () => {
    const scroller = elementRef.current
    if (scroller.scrollHeight - scroller.scrollTop === scroller.clientHeight) {
      setIsBottom(true)
    }
  }

  return [elementRef, handleScroll, items, loading]
}

export default useInfiniteScrollTo
