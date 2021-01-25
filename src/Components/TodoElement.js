import React, {useContext} from 'react';
import styled from 'styled-components';
import {Context} from "../Functions/Context";
import {lifeAnimation} from "../Functions/Functions";


const Element = styled.li`
    display: flex;   
    background: snow;
    margin: -5px 0 0 0;
    justify-content: space-between;
    align-items: center;   
    box-shadow: 0 0 5px 0 #333;
    animation: opacity-anime 0.5s linear;
    padding: 0 0 0 10px;
    
    @keyframes opacity-anime {
    0% {
    opacity: 0;
    }
    to {
    opacity: 1;
    }
    }
    
    @keyframes animated-moving {
    0% {
    //margin-right: 0;

    opacity: 1;
    }
    
    30% {
    //margin-right: 30px;    
    }
    to {
    //margin-right: -1000px;
    opacity: 0;

    }
    }                
 
        .complete-toggler {
        margin-right: 10px;
        }
        .remove-btn {
        font-size: 25px;
        padding: 5px;
        background: red;
        cursor: pointer;
        transition: font-size 0.5s ease-in;
        height: 45px;
        width: 20px;
        text-align: center;      
        &:hover {
          font-size: 28px;
          transition: font-size 0.5s ease-in;
        }   
}
`

const KeyElement = styled.div`
  flex-direction: column;
  margin: 20px 0;

  .tag {
    width: 190px;
    height: 35px;
    padding: 5px;
    background: gold;

  }
  
        &.key-maker.beautify {
          animation: animated-moving 500ms linear;
          
        }
`

export const TodoElement = ({name, index, completed, tag}) => {
    const {todo, setTodo, removeTodo, taskCompleted} = useContext(Context)

    return (
       <KeyElement key={index} className="key-maker">
           <div className="tag">{tag}</div>
           <Element>
               <div className="todo-info">
                   <input className="complete-toggler"
                          type="checkbox"
                          checked={completed}
                          onChange={(event) => {
                              lifeAnimation(event);
                             setTimeout(() => {
                                 taskCompleted(todo, setTodo, index);
                             }, 500)
                          }}
                   />
                   {name}
               </div>
               <div className="remove-btn"
                    onClick={(event) => {
                        lifeAnimation(event);
                        setTimeout(() => {
                            removeTodo(todo, setTodo, index)
                        }, 500)

                    }}
               >&times;</div>
           </Element>
           </KeyElement>
    )
}
