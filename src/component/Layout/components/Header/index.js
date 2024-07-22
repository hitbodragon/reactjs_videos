import styles from './Header.module.scss';
import classNames from 'classnames/bind';
// cài thư viện  npm i classnames
// bind có tác dụng bind cái object của styles lại cho cx
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
