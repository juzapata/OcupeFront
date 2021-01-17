import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import Title from '../../components/base/Title';
import Input from '../../components/base/Input';
import ListItem from '../../components/base/ListItem';
import Button from '../../components/base/Button';
import Map from '../../containers/Map';

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

  const [toggleSearch, setToggleSearch] = useState(false);
  const onClickToggleSearchList = () => setToggleSearch(false);
  const onClickToggleSearchMap = () => setToggleSearch(true);
  const [colorToggle, setColor] = useState('orange');


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
    <div className="mentor mentor__search-toggle">
      <i
        className={toggleSearch ? 'fas fa-list mentor--gray' : 'fas fa-list mentor--orange'}
        title="Buscar por lista de mentores"
        onClick={onClickToggleSearchList}
      />
      <i
        className={!toggleSearch ? 'fas fa-map-marked mentor--gray' : 'fas fa-map-marked mentor--orange'}
        title="Buscar por mapa"
        onClick={onClickToggleSearchMap}
      />
    </div>

    { !toggleSearch ? 
      <ul className="mentor__list">
        {listSearch.map((mentor, index) => <ListItem mentor={mentor} key={index} onClick={() => handleMentorCode(mentor.contact.email)} />)} 
      </ul> :
      <Map />
     } 
    </>
  )
}

export default SearchList;
