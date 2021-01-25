import React, {useContext, useRef} from 'react';
import styled from 'styled-components';
import {Context} from "../../Functions/Context";
import {addTodo, keyPressHandler} from "../../Functions/Functions";

const InputSector = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 500px){
  flex-direction: column;
  }
  input.todo-data {
   height: 30px;
   width: 90%;
   outline: none;
   margin: 0 10px;
  }
  input.tag {
   height: 30px;
   width: 250px;
   background: #ffdb36;
   outline: none;
   border: 1px solid #a7a7a7
  }
  
  button {  
  padding: 5px;
  cursor: pointer;
  outline: none;
  border: 1px solid #8c8c8c;
  border-radius: 5px;
  width: 200px;
  
  @keyframes some-animation {
  0% {
  box-shadow: 0 0 0 0 #7474ff;
  }
  50% {
  box-shadow: 0 0 20px 0 #7474ff;
  }
  to {
  box-shadow: 0 0 0 0 #7474ff;
  }
  }
  
  &:hover {
  background: #7474ff;
  transition: all 0.1s ease-in;
  color: snow;
  font-weight: bolder;
 animation: some-animation 2s infinite ;
  }
  }
`

export const Input = () => {
    const {todo, setTodo} = useContext(Context)
    const todoData = useRef(null)
    const tag = useRef(null)

    return (
        <InputSector>
            <input className="tag"
                   ref={tag}
                   type="text"
                   placeholder="tag"
                   onKeyPress={(event) => {keyPressHandler(event, todoData, tag, todo, setTodo)}}
            />

            <input className="todo-data"
                   ref={todoData}
                   type="text"
                   placeholder="enter todo"
                   onKeyPress={(event) => {keyPressHandler(event, todoData, tag, todo, setTodo)}}
            />

            <button onClick={() => {addTodo(todoData, tag, todo, setTodo)}}>ADD</button>
        </InputSector>
    )
}
