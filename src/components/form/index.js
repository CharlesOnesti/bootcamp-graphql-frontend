import React from 'react'
/*
import Form from './styles'
import Container from '../container/styles'
import List from '../list-item'
import FButton from '../list-item/form-button'
*/
import Textbar from './textbar'


const Input = ({placeholder,setSearch, search, label}) => {
    console.log(search)
    return(
        <>
            <Textbar placeholder={placeholder} value={search} type="text" label={label} setter={setSearch}/>
        </>
    )
}

export default Input