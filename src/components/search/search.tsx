import styles from './search.module.css';
import { useEffect, useRef, useState } from 'react';
import {
  getMessage,
  getSearchResults,
  goToSearchPage,
  sanitizeInput,
} from '../../utils';
import Link from 'next/link';
import { Item } from '../../API';

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
            <p id={'dropdown-message'}>
              {getMessage(isSearching, searchQuery.length)}
            </p>
          )}
          {showResults && (
            <ul className={styles.dropdownResults}>
              <li className={styles.item}>
                <Link href={`/search/${encodeURIComponent(searchQuery)}`}>
                  <a
                    className={styles.link}
                  >{`View all results for "${searchQuery}"`}</a>
                </Link>
              </li>

              {results.map((item: Item, key) => (
                <li className={styles.item} key={key}>
                  <Link href={`/item/${item.id}`}>
                    <a className={styles.link}>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </section>
  );
}
