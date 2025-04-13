import Badge from '@/common/Badge';
import styles from './FavoriteProjects.module.scss';
import { FAVORITES_PROFILES } from '@/constants/favoriteProjects';
import Card from '@/common/Card';

const FavoritesProjects = () => {
    return (
        <div className={styles.container}>
            {FAVORITES_PROFILES.map((project) => (
                <Card
                    key={project.id}
                    header={<Badge>📂 프로젝트</Badge>}
                    footer={<div className={styles.likes}>❤️좋아요 15개</div>}
                >
                    <main>
                        <div className={styles.dueDate}>{project.created_at}</div>
                        <div className={styles.title}>{project.title}</div>
                    </main>
                </Card>
            ))}
        </div>
    );
};

export default FavoritesProjects;
