'use client';

import Link from 'next/link';
import styles from './Sidebar.module.scss';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <nav className={styles.sidebar}>
            <div className={styles.group}>
                <p className={styles.groupTitle}>찜한 항목</p>
                <ul className={styles.link}>
                    <li>
                        <Link
                            href="/mypage/favorites/projects"
                            className={isActive('/mypage/favorites/projects') ? styles.active : ''}
                        >
                            찜한 프로젝트
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/mypage/favorites/profiles"
                            className={isActive('/mypage/favorites/profiles') ? styles.active : ''}
                        >
                            찜한 프로필
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.group}>
                <p className={styles.groupTitle}>내 활동</p>
                <ul className={styles.link}>
                    <li>
                        <Link href="/mypage/projects" className={isActive('/mypage/projects') ? styles.active : ''}>
                            작성한 프로젝트
                        </Link>
                    </li>
                    <li>
                        <Link href="/mypage/profile" className={isActive('/mypage/profile') ? styles.active : ''}>
                            작성한 프로필
                        </Link>
                        <ul className={styles.subLink}>
                            <li>
                                <Link
                                    href="/mypage/profile/applicants"
                                    className={isActive('/mypage/profile/applicants') ? styles.active : ''}
                                >
                                    ㄴ제안 현황
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className={styles.group}>
                <p className={styles.groupTitle}>지원</p>
                <ul className={styles.link}>
                    <li>
                        <Link
                            href="/mypage/applications"
                            className={isActive('/mypage/applications') ? styles.active : ''}
                        >
                            지원한 프로젝트
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/mypage/proposals/sent"
                            className={isActive('/mypage/proposals/sent') ? styles.active : ''}
                        >
                            제안한 프로필
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
