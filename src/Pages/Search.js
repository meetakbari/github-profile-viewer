import './Search.css'
import SearchBox from '../Components/SearchBox';
import { useState } from 'react';

const Search = () => {

    const [query, setQuery] = useState(''); // To store the search query i.e. username

    // Getting Query Value from the Child Component i.e. SearchBox
    const getQuery = (val) => {
        setQuery(val);
    }

    return (
        <div className="container">
            <SearchBox func={getQuery}/>
        </div>
    )
}

export default Search;