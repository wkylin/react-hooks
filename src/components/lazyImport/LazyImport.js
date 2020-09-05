import { lazy } from 'react'

const LazyImport = (filename) =>
  lazy(() =>
    // FAKE DELAY
    // const noop = () => {};
    new Promise((resolve) => {
      setTimeout(resolve, 1000)
    }).then(() => import(`${filename}`))
  )

export default LazyImport
