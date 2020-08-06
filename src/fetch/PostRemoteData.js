import React, { useMemo } from 'react';

import useFetch from './useFetchData';

const Err = ({ error }) => <span>Error:{error.message}</span>;

const Loading = ({ loading }) => <span>Loading...</span>;

const PostRemoteData = () => {
  const opts = useMemo(
    () => ({
      method: 'GET',
      readBody: (body) => body.json()
    }),
    []
  );
  const { error, loading, data } = useFetch(
    'https://jsonplaceholder.typicode.com/posts/1',
    opts
  );
  if (error) return <Err error={error} />;
  if (loading) return <Loading />;
  return <span>Result: {JSON.stringify(data)}</span>;
};

export default PostRemoteData;