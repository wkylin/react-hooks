import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingOne() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError('');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setPost({});
        setError('Something went wrong!');
      });
  }, []);
  return (
    <div>
      <div>
        {loading ? 'loading' : post.title}
        {error ? error : null}
      </div>
    </div>
  );
}

export default DataFetchingOne;
