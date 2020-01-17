import React from 'react'
import Input from '../../components/form'
import {useLazyQuery} from '@apollo/react-hooks'
import GET_BOOK from './graphql'

const SearchComponent = ({placeholder, search}) => {
    const [getBook, { loading, error, data, called }] = useLazyQuery(GET_BOOK,{
        variables: {id: search.title}
    })

    if(loading) return "loading..."
    if(error) return <button onClick={getBook}>{placeholder}</button>
    return(
        <div>
            <button onClick={getBook}>{placeholder}</button>
            <br/>
            <br/>
            <br/>
            {called && <ul>
                <li>Title: {data.book.title}</li>
                <li>Page Count: {data.book.numPages}</li>
                <li>Author: {data.book.author.firstName} {data.book.author.lastName}</li>
                <li>Publisher: {data.book.publisher.company}</li>
            </ul>}
        </div>
    )
}

export default SearchComponent