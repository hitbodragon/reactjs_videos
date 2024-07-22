import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { AiTwotoneCloseCircle, AiOutlineSearch, AiOutlineLoading } from 'react-icons/ai';
// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
// import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
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
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
