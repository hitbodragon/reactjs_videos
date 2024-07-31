import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import Button from '~/component/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '~/component/Layout/components/Search';

import { SlOptionsVertical } from 'react-icons/sl';
import Menu from '~/component/Popper/Menu';
import { MdLanguage } from 'react-icons/md';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import { CiKeyboard } from 'react-icons/ci';
import { IoCloudUploadOutline } from 'react-icons/io5';
import 'tippy.js/dist/tippy.css';
import { CiUser } from 'react-icons/ci';
import { FaCoins } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import { IoIosLogOut } from 'react-icons/io';
// import { UploadIcon } from '~/component/icons';
import Image from '~/component/Image';

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
    const currentUser = true;
    const userMenu = [
        {
            icon: <CiUser />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FaCoins />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <CiSettings />,
            title: 'Settings',
            to: '/settings',
        },

        ...MENU_ITEMS,
        {
            icon: <IoIosLogOut />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* <div className={cx('logo')}> */}
                <img src={images.logo} alt="tiktok" />
                {/* </div> */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <IoCloudUploadOutline />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://cdn.pixabay.com/photo/2015/04/24/20/58/girl-738303_960_720.jpgg"
                                className={cx('user-avatar')}
                                alt="Nguyen van a"
                                //fallback="https://www.bing.com/ck/a?!&&p=3704ec70eaf50898JmltdHM9MTcyMjIxMTIwMCZpZ3VpZD0yNzkwMjQ4Yi03Zjk2LTYzMWEtMzc1Ni0zMGM1N2VmMDYyODImaW5zaWQ9NTU2MA&ptn=3&ver=2&hsh=3&fclid=2790248b-7f96-631a-3756-30c57ef06282&u=a1L2ltYWdlcy9zZWFyY2g_cT1iZWF1dHlmdWxsJTIwaW1hZ2VzJkZPUk09SVFGUkJBJmlkPUU4NUU5RThGOEJBNkNEQzE2M0NFNjFGQjRBNzRDRUY1NDczOUVCNjc&ntb=1"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <SlOptionsVertical />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
