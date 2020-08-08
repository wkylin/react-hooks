import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  // const [posts, setPosts] = useState([])
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});

  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  useEffect(() => {
    /*
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                console.log('===>>>');
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err)
            })
        */
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log('===>>>');
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    /* axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log('===>>>');
                setPost(res.data);
            })
            .catch(err => {
                console.log(err)
            }) */
    // }, [id])
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>

      {/* <ul>
                {posts.map(post => (
                    <li key = {post.id}> {post.body}</li>
                ))}
            </ul>
             */}
    </div>
  );
}

export default DataFetching;
