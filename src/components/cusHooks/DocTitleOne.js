import React, {useState} from 'react'
import useDocTitle from './useDocTitle'

function DocTitleOne() {

    const [count, setCount] = useState(0)

    useDocTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}> Add Count  {count} </button>
        </div>
    )
}

export default DocTitleOne
