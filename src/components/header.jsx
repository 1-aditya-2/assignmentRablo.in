import React from 'react'
import {useState , useEffect} from 'react'

import './styles/header.css'

const Header = ({onSearch}) => {

  const [searchTerm, setSearchTerm] = useState('');
  useEffect(()=>{
    console.log(searchTerm)
    onSearch(searchTerm)
  },[searchTerm])

  return (
    <div className='header-container'>
      <div className='title'>
        <h1>Dashboard</h1>
      </div>
      <div className='searchBar'>
        <input
          type="text"
          placeholder="Search by ID"
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        {/* <button >Search</button> */}
      </div>
    </div>
  )
}

export default Header