import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData() {
  const [data, setData] = useState({ hits: [] });

  // useEffect(async () => {
  //   const result = await axios(
  //     'https://hn.algolia.com/api/v1/search?query=redux'
  //   );

  //   setData(result.data);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux'
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default FetchData;
