import styles from './RootHeader.module.scss';
import Link from 'next/link';

const RootHeader = () => {
    return (
        <nav className={styles.layout}>
            <ul>
                <li className={styles.logo}>
                    <Link href="/">핏플</Link>
                </li>

                <li className={styles.login}>
                    <Link href="/login">로그인</Link>
                </li>
            </ul>
        </nav>
    );
};

export default RootHeader;
