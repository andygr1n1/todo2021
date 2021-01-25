import React, {useContext} from 'react';
import styled from 'styled-components';
import {TodoElement} from "../TodoElement";
import {Context} from "../../Functions/Context";

export const TodoCompletedList = () => {
    const {todo} = useContext(Context)

    return (
        <div>
            {todo.map(({completed, name, tag}, index) => (

                completed
                    ? <TodoElement name={name} completed={completed} index={index} tag={tag}/>
                    : null

            ))}
        </div>
    )
}
