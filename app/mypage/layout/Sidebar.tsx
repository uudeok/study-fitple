import Link from 'next/link';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <div className={styles.group}>
                <p className={styles.groupTitle}>찜한 항목</p>
                <ul className={styles.link}>
                    <li>
                        <Link href="/mypage/favorites/projects">찜한 프로젝트</Link>
                    </li>
                    <li>
                        <Link href="/mypage/favorites/profiles">찜한 프로필</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.group}>
                <p className={styles.groupTitle}>내 활동</p>
                <ul className={styles.link}>
                    <li>
                        <Link href="/mypage/projects">작성한 프로젝트</Link>
                    </li>
                    <li>
                        <Link href="/mypage/profile">작성한 프로필</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.group}>
                <p className={styles.groupTitle}>지원</p>
                <ul className={styles.link}>
                    <li>
                        <Link href="/mypage/applications">지원한 프로젝트</Link>
                    </li>
                    <li>
                        <Link href="/mypage/proposals/sent">제안한 프로필</Link>
                    </li>
                    <li>
                        <Link href="/mypage/proposals/received">제안받은 프로필</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
