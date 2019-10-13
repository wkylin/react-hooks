import React, { useState } from 'react'
import useInput from './useInput'

function UserForm() {

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    console.log('useInput ==>>',  useInput(''));

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)

        resetFirstName()
        resetLastName()
    }

    // const resetHandler = e => {
    //     e.preventDefault()
    //     setLastName('')
    //     setFirstName('')
    // }
    return (
        <div>
            {/* <form onSubmit = {submitHandler} onReset={resetHandler}> */}
            <form onSubmit = {submitHandler}>
                <div>
                    <label>First name</label>
                    {/* <input
                        value={firstName}
                        onChange = { e => setFirstName(e.target.value)}
                    /> */}
                    <input
                        {...bindFirstName}
                        type='text'
                    />
                </div>
                <div>
                    <label>Last name</label>
                    <input
                        type='text'
                        {...bindLastName}
                    />
                    {/* <input
                        value={lastName}
                        onChange = { e => setLastName(e.target.value)}
                    /> */}
                </div>
                <button type='submit'>
                    submit
                </button>
                {/* <button type='reset'>
                    reset
                </button> */}
            </form>
        </div>
    )
}

export default UserForm
