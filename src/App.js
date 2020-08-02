/*
 * @Author: wkylin.w
 * @Date: 2020-08-02 09:11:51
 * @Last Modified by: wkylin.w
 * @Last Modified time: 2020-08-02 09:12:11
 */
// import React, { useEffect } from 'react';
import React from 'react';
import './App.css';
// import MoveListApp from "./components/moveList/MoveListApp";
// import UseMemoDemo from './components/useMemo/UseMemoDemo';
// import useWindowSize from './components/useWindowSize/useWindowSize';
// import useEffectExceptOnMount from './components/useEffectExceptOnMount/useEffectExceptOnMount';
// import DebouncedInput from './components/DebouncedInput/DebouncedInput';
// import { RequireContext } from './components/requireContext/requireContext';

// import Parent from './components/ReactSmartInRender/Parent';
// import Parent2 from './components/ReactSmartInRender/Parent2';
// import Parent3 from './components/ReactSmartInRender/Parent3';
// import Parent4 from './components/ReactSmartInRender/Parent4';
// import Parent5 from './components/ReactSmartInRender/Parent5';
// import Parent6 from './components/ReactSmartInRender/Parent6';
// import Parent7 from './components/ReactSmartInRender/Parent7';

import UserList from './components/useMemo/userList/UserList';

// const userLang = navigator.language;
// const defaultLocale = userLang.substring(0, 2);

function App() {
  // const [width, height] = useWindowSize();
  //
  // useEffectExceptOnMount(() => {
  //   console.log('except on mount');
  // }, [width]);
  //
  // useEffect(() => {
  //   console.log('use effect on mount');
  // }, [width]);
  return (
    <>
      {/* <Parent7 /> */}
      <UserList />
      {/*<p>User Lang: {`${userLang}-- ${defaultLocale}`}</p>*/}
      {/*<DebouncedInput*/}
      {/*  placeholder='init value'*/}
      {/*  onDebouncedValChange={val => {*/}
      {/*    console.log("called with val ", val);*/}
      {/*  }}*/}
      {/*  delay={300}*/}
      {/*/>*/}
      {/*<UseMemoDemo />*/}
      {/*<p>Window Width: {width}; Window Height: {height}</p>*/}
      {/*<MoveListApp />*/}
      {/*<RequireContext />*/}
    </>
  );
}

export default App;
