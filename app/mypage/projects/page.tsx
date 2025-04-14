'use client';

import styles from './MyProjects.module.scss';
import Card from '@/common/Card';
import Badge from '@/common/Badge';
import { MY_PROJECTS } from '@/constants/myProjects';
import { useRouter } from 'next/navigation';

const MyProjectsPage = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            {MY_PROJECTS.map((project) => (
                <Card
                    onClick={() => router.push(`/mypage/projects/${project.id}`)}
                    key={project.id}
                    header={<Badge>📂 프로젝트</Badge>}
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

export default MyProjectsPage;
