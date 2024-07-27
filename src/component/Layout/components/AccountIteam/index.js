import classNames from 'classnames/bind';
import styles from './AccountIteam.module.scss';
import { IoIosCheckmark } from 'react-icons/io';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/fed1e113786a14871b83192f1933728f~c5_300x300.webp?lk3s=a5d48078&nonce=3528&refresh_token=b0b8ebc9fcdeb385c93eaa14f46eeaf3&x-expires=1722135600&x-signature=qwB4mFAnXKy9jbF4qzpd3TpZ7gU%3D&shp=a5d48078&shcp=c1333099"
                alt="hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> Nguyen van a </span>
                    <IoIosCheckmark className={cx('check')} />
                </h4>
                <span className={cx('username')}>Name</span>
            </div>
        </div>
    );
}

export default AccountItem;
