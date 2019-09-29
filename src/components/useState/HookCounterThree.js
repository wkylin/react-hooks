import React, { useState }from 'react'

function HookCounterThree() {

    const initialState = {firstName: '', lastName: ''};

    const [name, setName] = useState(initialState);

    return (
        <div>
            <input
                type='text'
                value={name.firstName}
                onChange={ e => setName({...name, firstName:e.target.value})}
            />
            <input
                value={name.lastName}
                type='text'
                onChange={ e => setName({...name, lastName: e.target.value})}
            />
            <h2> Your first name is - { name.firstName }</h2>
            <h2> Your last name is - { name.lastName }</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree
