import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

const PostRemoteData = React.lazy(() => import('./PostRemoteData'));

const MyComponent = () => (
  <div>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <PostRemoteData />
        </section>
      </Suspense>
    </ErrorBoundary>
  </div>
);

export default MyComponent;