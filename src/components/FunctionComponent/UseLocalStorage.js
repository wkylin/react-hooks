
import React, { useState } from 'react';

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [localStorageKey, value]);

  return [value, setValue];
};

const UseLocalStorageApp = () => {
  const [value, setValue] = useStateWithLocalStorage('myValueInLocalStorage');

  const onChange = (event) => setValue(event.target.value);

  return (
    <div>
      <h1>Hello React Function Component!</h1>

      <input value={value} type='text' onChange={onChange} />

      <p>{value}</p>
    </div>
  );
};

export default UseLocalStorageApp;