import { useRef, useEffect } from 'react';

const usePrevious = (value = null, initialValue = undefined) => {
  const storedValue = useRef(initialValue);
  useEffect(() => {
    storedValue.current = value;
  }, [value])

  return storedValue.current;
}

export default usePrevious;
