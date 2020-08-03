import React, { useState, useEffect } from 'react';

function DocTitleTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Add Count {count} </button>
    </div>
  );
}

export default DocTitleTwo;
