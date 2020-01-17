import React from 'react'
import {Navbar, Table, Td} from './styles'
import { Link } from 'react-router-dom'

const Nav = () => (
    <Navbar>
        <Table>
            <tr>
                <Td><Link to="/query">QUERY</Link></Td>
                <Td><Link to="/mutate">MUTATE</Link></Td>
            </tr>
        </Table>
    </Navbar>
)

export default Nav