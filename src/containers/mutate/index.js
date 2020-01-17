import React, {useState, useReducer} from 'react'
import Input from '../../components/form'
import Form from '../../components/form/styles'
import {useQuery, useMutation} from '@apollo/react-hooks'
import ADD_BOOK from './graphql'
import MutateComponent from '../mutate_component'
import ListItem from '../book-list'


const Mutate = () => {
    const bookReducer = (prevState, payload) => ({...prevState, ...payload})
    const [addBook, setAddBook] = useReducer(bookReducer, {
        title: '', language: '', authorId: '', publisherId: ''
    })
    const [allbooks, setAllBooks] = useState([])
    console.log(addBook)
    return(
    <div>
        <Form>
            <Input placeholder="Title" search={addBook.title} setSearch={setAddBook} label="title"/>
            <Input placeholder="Language" search={addBook.language} setSearch={setAddBook} label="language"/>
            <Input placeholder="Author Id" search={addBook.authorId} setSearch={setAddBook} label="authorId"/>
            <Input placeholder="Publisher Id" search={addBook.publisherId} setSearch ={setAddBook} label="publisherId"/>
            <MutateComponent placeholder="Mutate" search={addBook}/>
        </Form>
        <ListItem/>
    </div>
    )
}

export default Mutate