import React from 'react'
import Container from '../container/styles'
import {Ul,Li} from './styles'
import FButton from './form-button'



const List = ({id, todo, alltodos, setAllTodos}) => (
    <Container>
        <Ul>
            <Li>
                <div style={{listStyleType: 'none', display:'flex',flexDirection:"column"}}>
                    <div style={{color:'crimson', fontWeight:'bold', fontSize:'36px'}} >Category: {todo.title}</div>
                    <div style={{fontSize:'24px'}}>Description: {todo.text}</div>
                    <div style={{fontSize:'24px'}}>Due Date: {todo.date}</div>
                </div>
            </Li>
            <Li><FButton text="remove" action={() => setAllTodos(alltodos.filter(t => {
                if (id === t.id) {
                    return false;
                }
                return true;
            }))}/></Li>
        </Ul>
    </Container>
)

export default List