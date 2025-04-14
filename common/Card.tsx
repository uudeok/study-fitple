import styles from './Card.module.scss';
import { MouseEventHandler, ReactNode } from 'react';

type CardProps = {
    header?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
};

const Card = ({ header, children, footer, onClick }: CardProps) => {
    return (
        <div className={styles.card} onClick={onClick}>
            {header && <header className={styles.header}>{header}</header>}
            <main className={styles.main}>{children}</main>
            {footer && <footer className={styles.footer}>{footer}</footer>}
        </div>
    );
};

export default Card;
