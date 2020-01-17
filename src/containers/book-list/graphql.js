import gql from 'graphql-tag'

const GET_BOOKS = gql`
    query books {
        books {
            title
            numPages
            author {
                id
                firstName
            }
            publisher{
                company
            }
        }
    }
`
export default GET_BOOKS