import React from 'react'
import Input from '../../components/form'
import {useMutation} from '@apollo/react-hooks'
import ADD_BOOK from './graphql'

const MutateComponent = ({placeholder, search}) => {
    const [mutate, {loading, error}] = useMutation(ADD_BOOK,{
        variables: {input: search},
        /* NEED TO MAKE THE GET_BOOKS QUERY
        onCompleted: () => console.log('ladies and gentlemen, we got him'),
        update: (client, {data: { search } }) => {
            try{
                const data = client.readQuery({query: GET_BOOKS})
                data.allbooks = [...data.allbooks, search]
                client.writeQuery({ query: GET_BOOKS, data })
            } catch(error){
                //do nothing
            }
        }
        */
    })
    console.log('Passing this to ADD_BOOK:', search)
    if(loading) return "loading..."
    if(error) {
        console.log(error)
    }
    return(
        <div>
            <button onClick={() => {
                console.log("Buton clicked wih data: ", search)
                mutate()
            }}>{placeholder}</button>
        </div>
    )
}

export default MutateComponent