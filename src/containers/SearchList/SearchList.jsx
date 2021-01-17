import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import Title from '../../components/base/Title';
import Input from '../../components/base/Input';
import ListItem from '../../components/base/ListItem';

const SearchList = () => {
  const [inputValue, setInputValue] = useState('');
  const [mentores, setMentores] = useState([]);
  const [listSearch, setListSearch] = useState([]);
  let history = useHistory();

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

  const handleMentorCode = (mentorCode) => {
    history.push('/mentor/' + mentorCode);
  }

  return (
    <>
    <Title 
        text="Sua Trilha"
        classNameTitle="title"
      />
    <Input
      placeholder="Nome, profissão ou localização"
      type="search"
      icon="fas fa-search"
      onChange={(e) => handleListSearch(e)}
    />

    <ul className="mentor__list">
      {listSearch.map(mentor => <ListItem mentor={mentor} key={mentor.id} onClick={() => handleMentorCode(mentor.contact.email)} />)} 
    </ul>
    </>
  )
}

export default SearchList;
