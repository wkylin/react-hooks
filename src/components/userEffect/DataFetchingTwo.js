import React, {useEffect, useReducer} from 'react'

import axios from 'axios'

const initialState = {
    loading:true,
    error:'',
    post:{}
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                post: action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return {
                loading:false,
                post:{},
                error:'Something went wrong!'
            }
            default:
                return state;
    }
}
function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(res => {
                dispatch({type:'FETCH_SUCCESS', payload: res.data})
            })
            .catch(err => {
                dispatch({type:'FETCH_ERROR'})
            })
    }, [])
    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo
