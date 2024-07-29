import Button from '~/component/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onCLick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button leftIcon={data.icon} className={classes} to={data.to} onClick={onCLick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
