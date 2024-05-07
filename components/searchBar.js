import styles from "../styles/components/searchbar.module.css"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.SearchBar}>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit"><FaSearch className={styles.SearchIcon}/></button>
    </form>
  );
};

export default SearchBar;