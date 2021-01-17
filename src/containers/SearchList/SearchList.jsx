import React, { useEffect, useState } from 'react';

import Input from '../../components/base/Input';
import ListItem from '../../components/base/ListItem';
import NavBar from '../../containers/Navbar';

const SearchList = () => {
  const [inputValue, setInputValue] = useState('');
  const [mentores, setMentores] = useState([]);
  const [listSearch, setListSearch] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('https://ocupe-back-end.herokuapp.com/ocupe/get-mentors')
          .then((res) => res.json())
          .then(data => setMentores(data.mentores));
      } catch (e) {
          console.error(e);
      }
  };
  fetchData();

  let filterInput = mentores.filter((mentor) => 
    mentor.name.toLowerCase().includes(inputValue.toLowerCase()) ||
    mentor.profession.toLowerCase().includes(inputValue.toLowerCase())
    )
    setListSearch(filterInput);
}, [inputValue, mentores]);

  const handleListSearch = (e) => {
    let inputSearchValue = e.target.value; 
    setInputValue(inputSearchValue)   
  }

  return (
    <>
    <NavBar />
    <Input
      label="Busca"
      placeholder="Pesquise por nome, profissão ou localização"
      type="search"
      icon="fas fa-search"
      onChange={(e) => handleListSearch(e)}
    />

    <ul className="mentor__list">
      {listSearch.map((mentor, index) => <ListItem mentor={mentor} key={index} onClick={() => console.log(mentor.name)} />)} 
    </ul>
    </>
  )
}

export default SearchList;
