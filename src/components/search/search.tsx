import styles from './search.module.css';
import { useState } from 'react';
import { sanitizeInput } from '../../utils/sanitizeInput';

export function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);

  return (
    <section className={styles.search} id={'search'}>
      <header className={styles.searchHeader} id={'search-header'}>
        <input
          aria-label="search"
          autoComplete="off"
          className={styles.input}
          id="search-input"
          onChange={(e) => {
            const value = sanitizeInput(e?.target?.value);
            if (value !== searchQuery) {
              setIsSearching(true);
              setSearchQuery(value);
            }
          }}
          onFocus={() => setShowDropdown(true)}
          placeholder="Search an item"
          type="text"
          value={searchQuery}
        />

        <button
          aria-label="search"
          className={styles.button}
          id="search-button"
          onClick={() => {
            if (showDropdown) {
              setSearchQuery('');
            }
            setShowDropdown((value) => !value);
          }}
        >
          <i className={showDropdown ? styles.iconClose : styles.iconSearch} />
        </button>
      </header>
    </section>
  );
}
