import gql from 'graphql-tag'

const ADD_BOOK = gql`
mutation m_book ($input: CreateBookInput!) {
    createBook (input: $input) {
        id
        title
        numPages
        language
        bestseller
        publisher {
            id
            company
        }
        author {
            id
            firstName
            lastName
            age
        }
    }
}
`
export default ADD_BOOK