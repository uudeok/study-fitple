'use client';

import Badge from '@/common/Badge';
import styles from './FavoriteProjects.module.scss';
import { FAVORITES_PROJECTS } from '@/constants/favoriteProjects';
import Card from '@/common/Card';
import Image from 'next/image';

const FavoritesProjects = () => {
    return (
        <div className={styles.container}>
            {FAVORITES_PROJECTS.map((project) => (
                <Card
                    key={project.id}
                    header={
                        <div className={styles.header}>
                            <Badge>📂 프로젝트</Badge>
                            <Image src="/bookmark.svg" width={15} height={15} alt="bookmark" />
                        </div>
                    }
                    footer={<div className={styles.likes}>❤️좋아요 15개</div>}
                >
                    <main>
                        <div className={styles.createDate}>{project.created_at}</div>
                        <div className={styles.title}>{project.title}</div>
                    </main>
                </Card>
            ))}
        </div>
    );
};

export default FavoritesProjects;
