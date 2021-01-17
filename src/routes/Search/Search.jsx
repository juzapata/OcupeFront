import React from 'react';

import Navbar from '../../containers/Navbar';
import SearchList from '../../containers/SearchList';

const Search = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <SearchList />
    </div>
    </>
  )
}

export default Search;
