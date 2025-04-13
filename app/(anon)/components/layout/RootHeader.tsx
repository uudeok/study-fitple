import styles from './RootHeader.module.scss';
import Link from 'next/link';

const RootHeader = () => {
    return (
        <nav className={styles.layout}>
            <ul>
                <li>
                    <Link href="/">로고</Link>
                </li>

                <li>
                    <Link href="/login">로그인</Link>
                </li>
            </ul>
        </nav>
    );
};

export default RootHeader;
