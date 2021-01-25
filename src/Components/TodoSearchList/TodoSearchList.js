import React, {useContext} from 'react';
import styled from 'styled-components';
import {Context} from "../../Functions/Context";
import {searchFilter} from "../../Functions/Functions";

const SearchList = styled.ul`
  width: 175px;
  max-height: 500px;
  height: auto;
  background: #fefaf9;
  position: absolute;
  top: 45px;
  right: 10px;
  padding: 5px;
  display: none;
  //overflow-y:auto;
  //overflow-x: initial;
  
  
    li {
    margin: 5px;
    box-shadow: none;
    border: none;
    cursor:pointer;
    background: none;
    transition: background 0.3s ease-in;
    text-align: left;
    font-size: 12px;
    max-width: 170px;
    
    &:hover {
    background: #FFCC70;
    transition: background 0.3s ease-in;
    }
    }
  
  &.search-options.show-options {
  display: block;
  }
`

export const TodoSearchList = () => {
    const { todo, searchByTagValue} = useContext(Context);

    const mySet = new Set();
    todo.map((element) => mySet.add(element.tag));
    const superArray = [];
    mySet.forEach(element => superArray.push(element));

    return (
        <SearchList className="search-options">
            {superArray.map((tag) => {
                return (

                    searchByTagValue.trim().length === 0 ?

                    <li>{tag}</li>

                        :

                        searchFilter(tag.toLowerCase(), searchByTagValue.toLowerCase())
                            ?

                            <li>{tag}</li>
                            :
                            null
                )
            })}
        </SearchList>
    )
}
