import { useState, forwardRef } from 'react';

import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(images.noImage);
    };
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            // class dùng cho tương lai
            className={classNames(styles.wrapper, className)}
            ref={ref}
            {...props}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Image;
