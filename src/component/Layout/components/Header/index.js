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
import { SlOptionsVertical } from 'react-icons/sl';
import Menu from '~/component/Popper/Menu';
import { MdLanguage } from 'react-icons/md';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import { CiKeyboard } from 'react-icons/ci';

// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
// import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <MdLanguage />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <HiOutlineQuestionMarkCircle />,
        title: 'Feedback and helps',
        to: '/feedback',
    },
    {
        icon: <CiKeyboard />,
        title: 'keyboards shortcuts',
    },
];

function Header() {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0);
    });
    // Handle logc
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle language change
                break;
            default:
                // handle other menu items
                break;
        }
    };
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
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}> Acounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
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

                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <SlOptionsVertical />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
