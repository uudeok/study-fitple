import { HTMLAttributes, ReactNode } from 'react';
import styles from './Badge.module.scss';

interface Props extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    background?: 'primary' | 'secondary';
}

const Badge = (props: Props) => {
    const { children, background = 'primary', ...rest } = props;

    return (
        <span className={`${styles.badge} ${styles[background]}`} {...rest}>
            {children}
        </span>
    );
};

export default Badge;
