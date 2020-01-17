import React from 'react'

const FButton = ({ text, action, alltodos}) => {
    return(
    <button onClick={action}>
        {text}
    </button>
    )}

export default FButton