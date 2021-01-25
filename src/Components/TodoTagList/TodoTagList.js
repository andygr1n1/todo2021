import React, {useContext} from 'react';
import {TodoElement} from "../TodoElement";
import {Context} from "../../Functions/Context";
import {searchFilter} from "../../Functions/Functions";

export const TodoTagList = () => {
    const {todo, searchByTagValue} = useContext(Context)

    return (
        <div>
            {todo.map(({completed, name, tag}, index) => {
                return (
                    (

                        searchFilter(tag, searchByTagValue)
                            ?
                            <TodoElement name={name} completed={completed} index={index} tag={tag}/>
                            :
                            null

                    )
                )
            })}
        </div>
    )
}
