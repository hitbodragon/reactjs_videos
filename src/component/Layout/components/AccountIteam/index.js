import classNames from 'classnames/bind';
import styles from './AccountIteam.module.scss';
import { IoIosCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Image from '~/component/Image';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> {data.full_name} </span>
                    {data.tick && <IoIosCheckmark className={cx('check')} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
