import { useEffect } from 'react'

export function useInfiniteScrollFix(forwardedRef, isLoading, loadMoreItems) {
  const shouldLoadMoreItems = () =>
    !isLoading() &&
    forwardedRef.current &&
    forwardedRef.current.getBoundingClientRect().bottom <
      window.innerHeight + window.pageYOffset

  const onWindowEvent = () => shouldLoadMoreItems() && loadMoreItems()

  useEffect(() => {
    window.addEventListener('scroll', onWindowEvent)
    window.addEventListener('resize', onWindowEvent)
    return () => {
      window.removeEventListener('scroll', onWindowEvent)
      window.removeEventListener('resize', onWindowEvent)
    }
  })

  useEffect(loadMoreItems, [])
}

// useInfiniteScroll(
//   listRef,
//   () => isLoading,
//   () => {
//     setIsLoading(true)
//     axios
//       .get('https://api.github.com/repositories', {
//         params: {
//           since: lastLoadedItem,
//         },
//       })
//       .then(({ data }) => {
//         setItems([...items, ...data])
//         setLastLoadedItem(data[data.length - 1].id)
//         setIsLoading(false)
//       })
//   }
// )
