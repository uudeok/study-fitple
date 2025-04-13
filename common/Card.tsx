import styles from './Card.module.scss';
import { ReactNode } from 'react';

type CardProps = {
    header?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
};

const Card = ({ header, children, footer }: CardProps) => {
    return (
        <div className={styles.card}>
            {header && <header className={styles.header}>{header}</header>}
            <main className={styles.main}>{children}</main>
            {footer && <footer className={styles.footer}>{footer}</footer>}
        </div>
    );
};

export default Card;
