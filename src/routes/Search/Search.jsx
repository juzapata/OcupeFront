import React from 'react';

import Navbar from '../../containers/Navbar';
import Footer from '../../containers/Footer';
import SearchList from '../../containers/SearchList';

const Search = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <SearchList />
    </div>
    <Footer />
    </>
  )
}

export default Search;
