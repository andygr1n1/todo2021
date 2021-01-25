import {useState} from 'react';

export const useTagSearch = () => {
    const [searchByTagValue, setSearchByTagValue] = useState("");
    return {searchByTagValue, setSearchByTagValue}
}
