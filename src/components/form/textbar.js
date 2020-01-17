import React from 'react'

const Textbar = ({placeholder, type, label, setter, value}) => {

    return (
        <input	placeholder={placeholder} type={type} value={value} onChange={e => setter({ [label]: e.target.value})}/>
    )
} 

export default Textbar