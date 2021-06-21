import styles from './search.module.css';
import { useEffect, useRef, useState } from 'react';
import {
  getMessage,
  getSearchResults,
  goToSearchPage,
  sanitizeInput,
} from '../../utils';

export function Search() {
  const ref = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  const showResults = !isSearching && !!results.length;

  useEffect(() => {
    const handler = setTimeout(() => {
      getSearchResults(searchQuery)
        .then((searchResults) => setResults([...searchResults]))
        .finally(() => setIsSearching(false));
    }, 250);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    /**
     * Close dropdown if user clicked outside of element
     */
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <section className={styles.search} id={'search'} ref={ref}>
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
          onKeyDown={(e) => {
            if (e.key === 'Enter') goToSearchPage(searchQuery);
          }}
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

      {showDropdown && (
        <section className={styles.searchDropdown} id={'search-dropdown'}>
          {!showResults && (
            <p className={styles.message} id={'dropdown-message'}>
              {getMessage(isSearching, searchQuery.length)}
            </p>
          )}
        </section>
      )}
    </section>
  );
}
