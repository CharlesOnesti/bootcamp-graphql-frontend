import React, {useState} from 'react'
import Input from '../../components/form'
import Form from '../../components/form/styles'
import {useQuery} from '@apollo/react-hooks'
import GET_BOOK from './graphql'
import SearchComponent from '../search_component'


const Query = () => {
    const [search, setSearch] = useState({title: ''})
    return(
    <div>
        <Form>
            <Input placeholder="Query Books" search={search.title} setSearch={setSearch} label="title"/>
            <SearchComponent placeholder= "Query" search={search}/>
        </Form>
    </div>
    )
}

export default Query