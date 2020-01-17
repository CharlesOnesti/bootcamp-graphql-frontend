import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import GET_BOOKS from './graphql'


const ListItem = () => {
    const { loading, error, data } = useQuery(GET_BOOKS)
    if (loading) return 'loading'
    if (error) return 'error'
    console.log('list data: ', data.books)
    return(
    <div style={{display:'flex',justifyContent:'center'}}>
        <table>
            <thead>
                <tr>
                    <td>TITLE</td>
                    <td>AUTHOR</td>
                    <td>PUBLISHER</td>
                </tr>
            </thead>
            <tbody>
                {data.books.map(obj => {
                    console.log('this obj: ', obj)
                    return(
                        <tr>
                            <td><strong>{obj.title}</strong></td>
                            <td>{obj.author.firstName} {obj.author.lastName}</td>
                            <td>{obj.publisher.company}</td>
                        </tr>
                    )}
                )}
            </tbody>
        </table>
    </div>
    )
}

export default ListItem