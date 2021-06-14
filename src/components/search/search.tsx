import styles from './search.module.css';
import { useState } from 'react';
import { sanitizeInput } from '../../utils/sanitizeInput';

export function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [results, setResults] = useState([]);

    return (
        <section className={styles.search}>
            <header id={'search-header'}>
                <input
                    aria-label='search'
                    autoComplete='off'
                    id='search-input'
                    onChange={(e) => {
                        const value = sanitizeInput(e?.target?.value);
                        if (value !== searchQuery) {
                            setIsSearching(true);
                            setSearchQuery(value);
                        }
                    }}
                    onFocus={() => setShowDropdown(true)}
                    placeholder='Search'
                    type='text'
                    value={searchQuery}
                />
            </header>
        </section>
    );
}
