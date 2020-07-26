import React, { useEffect } from 'react';
import './App.css';
import MoveListApp from "./components/moveList/MoveListApp";
import useWindowSize from './components/useWindowSize/useWindowSize';
import useEffectExceptOnMount from './components/useEffectExceptOnMount/useEffectExceptOnMount';

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
      <p>Window Width: {width}; Window Height: {height}</p>
      <MoveListApp />
    </>
  );
}

export default App;
