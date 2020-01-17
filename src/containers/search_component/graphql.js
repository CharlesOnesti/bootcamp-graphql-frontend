import gql from 'graphql-tag'

const GET_BOOK = gql`
    query book ($id: ID!) {
        book (bookId: $id) {
            id
            title
            numPages
            author {
                id
                firstName
                lastName
            }
            publisher{
                company
            }
        }
    }
`
export default GET_BOOK