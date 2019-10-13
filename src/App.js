import React, { useReducer } from 'react';
import './App.css';


import HookCounterThree from './components/useState/HookCounterThree'
import HookCounterFour from './components/useState/HookCounterFour';
import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounterTwo from './components/useState/HookCounterTwo';

import HookCounterOne from './components/useEffect/HookCounterOne'
import ClassCounterOne from './components/useEffect/ClassCounterOne';
import ClassMouse from './components/useEffect/ClassMouse';
import HookMouse from './components/useEffect/HookMouse';
import MouseContainer from './components/useEffect/MouseContainer';
import IntervalClassCounter from './components/useEffect/IntervalClassCounter';
import HookIntervalCounter from './components/useEffect/HookIntervalCounter';
import DataFetching from './components/useEffect/DataFetching';
// import ComponentC from './components/useContext/ComponentC';
import CounterOne from './components/useReducer/CounterOne';
import CounterTwo from './components/useReducer/CounterTwo';
import CounterThree from './components/useReducer/CounterThree';
import ComponentA from './components/useReducerAndContext/ComponentA';
import ComponentB from './components/useReducerAndContext/ComponentB';
import ComponentC from './components/useReducerAndContext/ComponentC';
import DataFetchingOne from './components/useEffect/DataFetchingOne';
import DataFetchingTwo from './components/useEffect/DataFetchingTwo';
import ParentComponent from './components/useCallBack/ParentComponent';
import useMemoCounter from './components/useMemo/UseMemoCounter';
import UseMemoCounter from './components/useMemo/UseMemoCounter';
import FocusInput from './components/useRef/FocusInput';
import ClassTimer from './components/useRef/ClassTimer';
import HookTimer from './components/useRef/HookTimer';
import DocTitleOne from './components/cusHooks/DocTitleOne';
import DocTitleTwo from './components/cusHooks/DocTitleTwo';
import CusCounter from './components/cusCounter/CusCounter';
import CusCounterTwo from './components/cusCounter/CusCounterTwo';
import UserForm from './components/userForm/UserForm';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)


  return (
    // <CountContext.Provider value = {{countState:count, countDispatch: dispatch}}>
      <div className="App">
        {/* <ClassCounter/> */}
        {/* <HookCounter/> */}
        {/* <HookCounterTwo/> */}
        {/* <HookCounterThree/> */}
        {/* <HookCounterFour/> */}
        {/* <HookCounterOne/> */}
        {/* <ClassCounterOne/> */}
        {/* <ClassMouse/> */}
        {/* <HookMouse/> */}
        {/* <MouseContainer /> */}
        {/* <IntervalClassCounter/> */}
        {/* <HookIntervalCounter/> */}
        {/* <DataFetching/> */}
        {/* <UserContext.Provider value={'wkylin'}>
          <ChannelContext.Provider value={'kylin'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider> */}
      
        {/* <CounterOne/> */}
        {/* <CounterTwo/> */}
        {/* <CounterThree/> */}

        {/* <h2>Count -- {count}</h2> */}
        {/* <ComponentA/> */}
        {/* <ComponentB/> */}
        {/* <ComponentC/> */}

        {/* <DataFetchingOne/> */}
        {/* <DataFetchingTwo/> */}
        {/* <ParentComponent/> */}

        {/* <UseMemoCounter/> */}
        {/* <FocusInput/> */}
        {/* <ClassTimer/> */}
        {/* <HookTimer/> */}

        {/* <DocTitleOne/> */}
        {/* <DocTitleTwo/> */}

        {/* <CusCounter/> */}
        {/* <CusCounterTwo/> */}

        <UserForm/>
      </div>
    // </CountContext.Provider>
  );
}

export default App;
