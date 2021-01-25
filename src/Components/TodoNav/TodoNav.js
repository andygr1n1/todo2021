import React, {useContext} from 'react';
import styled from 'styled-components';
import {Context} from "../../Functions/Context";
import {TodoSearchList} from "../TodoSearchList/TodoSearchList";
import {getSearchOptions, hideSearchOptions} from "../../Functions/Functions";

const TodoNavigator = styled.div`
display: flex;
justify-content: left;
font-family: 'Yusei Magic', sans-serif;
position: relative;

    button {
    font-family: 'Yusei Magic', sans-serif;
    margin: 10px 10px 10px 0;
    border: 10px;
    padding: 10px;    
    cursor: pointer;
    outline: none;
    border-radius: 5px 5px 0 0;
    font-size: 14px;
    width: 150px;
    height: 50px;
    
    &.active {
    font-weight: bolder;
    font-size: 16px;
    transition: font-size 0.3s ease-out;
    color: #7474ff;
    background: snow;
    
    }
    }
    
    .tag-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding: 0 10px;
    background: snow;    
    border-radius: 5px 5px 0 0;
    height: 50px;
    border: 10px;
    position: relative;
    
      input {
      height: 25px;
      
      }
    }

`

export const TodoNav = () => {
    const {tab, setTab, active,  setSearchByTagValue} = useContext(Context)

    const tagFinder = (e) => {
        setSearchByTagValue(e.target.value)
    }

    return(

        <TodoNavigator>
            <button className={tab ? active : ""} onClick={() => {setTab(true)}}>Active</button>
            <button className={!tab ? active : ""} onClick={() => {setTab(false)}}>Completed</button>
            <div className="tag-search">
                Search by tag:
                <input onChange={tagFinder}
                       onFocus={() => {getSearchOptions(".search-options")}}
                       onBlur={() => {hideSearchOptions(".search-options")}}
                       type="text" placeholder="type something"/>
                <TodoSearchList />
            </div>
        </TodoNavigator>
    )

}
