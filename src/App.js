import React, { useEffect } from 'react';
import './App.css';
import MoveListApp from "./components/moveList/MoveListApp";
import UseMemoDemo from './components/useMemo/UseMemoDemo';
import useWindowSize from './components/useWindowSize/useWindowSize';
import useEffectExceptOnMount from './components/useEffectExceptOnMount/useEffectExceptOnMount';
import DebouncedInput from './components/DebouncedInput/DebouncedInput';

function App() {
  const [width, height] = useWindowSize();
  
  useEffectExceptOnMount(() => {
    console.log('except on mount');
  }, [width]);
  
  useEffect(() => {
    console.log('use effect on mount');
  }, [width]);
  
  return (
    <>
      <DebouncedInput
        placeholder='init value'
        onDebouncedValChange={val => {
          console.log("called with val ", val);
        }}
        delay={300}
      />
      <UseMemoDemo />
      <p>Window Width: {width}; Window Height: {height}</p>
      <MoveListApp />
    </>
  );
}

export default App;
