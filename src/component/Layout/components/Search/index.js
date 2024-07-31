import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useState, useEffect, useRef } from 'react';
import { AiTwotoneCloseCircle, AiOutlineSearch, AiOutlineLoading } from 'react-icons/ai';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchServices from '~/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '../AccountIteam';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchValue, 1000);

    const inputref = useRef();
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResults([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const results = await searchServices.search(debounce);

            setSearchResults(results);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);
    const handleHideResult = () => {
        setShowResults(false);
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResults && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}> Acounts</h4>
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            //  bấm ra ngoài khu vực ẩn kết quả đi
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputref}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResults(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchValue('');
                            inputref.current.focus();
                        }}
                    >
                        <AiTwotoneCloseCircle />
                    </button>
                )}

                {loading && <AiOutlineLoading className={cx('loading')} />}
                <button className={cx('search-btn')}>
                    <AiOutlineSearch />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
