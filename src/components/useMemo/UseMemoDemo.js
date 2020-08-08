import React, { useEffect, useMemo, useState } from 'react';

const fetchData = () => {
  // Imagine here an API call which returns a random number
  return Math.random();
};

const runHeavyCalc = data => {
  if (!data) return;

  // Math.floor is not heavy, Use your imagination again
  console.log('Computing heavy func with data', data);
  return Math.floor(data * 100);
};

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  console.log("App rendered with count", count);

  useEffect(() => {
    const data = fetchData();
    setData(data);
  }, []);

  const result = useMemo(() => runHeavyCalc(data), [data]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Counter: {count}</p>
      <p>Result is {result}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
};

export default React.memo(UseMemoDemo);
// export default UseMemoDemo;
