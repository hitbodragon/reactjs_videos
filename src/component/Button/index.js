import className from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

// lấy những props của ta thêm vào
// primary là classNmae
function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = 'medium',
    large,
    disable = false,
    text = false,
    rounded = false,
    children,
    onClick,
    leftIcon,
    className,
    ...passProps
}) {
    // tình hướng tương tác của các nút
    let Comp = 'button';
    // mat dinh la button
    const props = {
        onClick,
        ...passProps,
    };
    // if (disable) {
    //     delete props.onClick;
    // }
    // cach 2 remove listener when btn is disabled
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    // lam dieu kien the a button routerdom, to laf thuoc tinh
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        // khi cos claaName nó sẽ lấy className làm giá trị
        primary,
        outline,
        disable,
        small,
        large,
        leftIcon,
        rounded,

        // nếu primary = true thì nó add thêm 1 nút primary vào
        text,
        // nếu primary = true thì nó add thêm 1 nút primary vào

        // nếu primary = true thì nó add thêm 1 nút primary vào
        //  nó add thêm 1 nút primary vào
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {/* span them icon dê xử lý hơn */}
        </Comp>
    );
}

export default Button;
