import React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { AiTwotoneCloseCircle, AiOutlineSearch, AiOutlineLoading } from 'react-icons/ai';
import Tippy from '@tippyjs/react/headless';

import Button from '~/component/Button';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '../AccountIteam';
// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
// import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <PopperWrapper>
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <h4 className={cx('search-title')}> Acounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </div>
                        </PopperWrapper>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <AiTwotoneCloseCircle />
                        </button>
                        <AiOutlineLoading className={cx('loading')} />

                        <button className={cx('search-btn')}>
                            <AiOutlineSearch />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
