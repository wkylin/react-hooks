import React, { Suspense } from 'react'
import MyErrorBoundary from './MyErrorBoundary'

const PostRemoteData = React.lazy(() => import('./PostRemoteData'))

const MyComponent = () => (
  <div>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <PostRemoteData />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
)

export default MyComponent
