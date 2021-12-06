import './Search.css'
import { useState } from 'react';

import SearchBox from '../Components/SearchBox';
import Header from '../Components/Header';
import ProfileCard from '../Components/ProfileCard';

const Search = () => {

    const [query, setQuery] = useState(''); // To store the search query i.e. username

    // Getting Query Value from the Child Component i.e. SearchBox
    const getQuery = (val) => {
        setQuery(val);
    }

    return (
        <div className="container">
            <div className="header-container">
                <Header />
                <SearchBox func={getQuery}/>
            </div>
            <div className="search-results-container">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
        </div>
    )
}

export default Search;