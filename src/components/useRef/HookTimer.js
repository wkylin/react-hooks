import React, {useState, useEffect, useRef} from 'react'

export default function HookTimer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    // useEffect(() => {
    //     const interval = setInterval(() =>{
    //         setTimer(prevTimer => prevTimer + 1)
    //     }, 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [])
    useEffect(() => {
        intervalRef.current = setInterval(() =>{
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current )
        }
    }, [])
    return (
        <div>
            Hook Timer = { timer }
            {/* <button onClick={()=> clearInterval(interval)}>clearTimer</button> */}
            <button onClick={()=> clearInterval(intervalRef.current )}>clearTimer</button>
        </div>
    )
}
