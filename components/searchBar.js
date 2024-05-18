import styles from "../styles/components/searchbar.module.css"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/router';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log(query)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`http://localhost:3000/results/result?query=${encodeURIComponent(query)}`)
    setQuery('')
  };

  return (
    <form onSubmit={handleSubmit} className={styles.SearchBar}>
      <input
        type="text"
        placeholder="Pesquisar por nome"
        value={query}
        onChange={handleChange}
      />
      <button type="submit"><FaSearch className={styles.SearchIcon}/></button>
    </form>
  );
};

export default SearchBar;