import styles from './MyProjects.module.scss';
import { FAVORITES_PROJECTS } from '@/constants/favoriteProjects';
import Card from '@/common/Card';
import Badge from '@/common/Badge';

const MyProjectsPage = () => {
    return (
        <div className={styles.container}>
            {FAVORITES_PROJECTS.map((project) => (
                <Card
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
