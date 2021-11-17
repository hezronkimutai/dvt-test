import React from 'react';
import { useEffect } from 'react';
import { AppContext, fetchData } from '../utils';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { searchTerm, setSearchTerm, setData } = React.useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(searchTerm, setData);
  }, []);

  const handleSearch = () => {
    fetchData(searchTerm, setData);
    handleGoBack();
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSearchTerm(value);
  }

  const handleGoBack = () => {
    navigate("/");
  }

  return (
    <nav className="nav-bar">
      <h1 className='logo' onClick={handleGoBack}>Deezer</h1>
      <div className="search-box">
        <input className="search-box-input" type='text' value={searchTerm} onChange={handleChange} />
        <button className="search-box-button" onClick={handleSearch}>Search</button>
      </div>
    </nav>)
}

export default NavBar;
