import styles from './FavoriteProfiles.module.scss';
import Badge from '@/common/Badge';
import Card from '@/common/Card';
import Image from 'next/image';
import { FAVORITES_PROFILES } from '@/constants/favoriteProfiles';

const FavoritesProfiles = () => {
    return (
        <div className={styles.container}>
            {FAVORITES_PROFILES.map((profile) => (
                <Card
                    key={profile.id}
                    header={
                        <div className={styles.header}>
                            <Badge background="secondary">🤩 프로필</Badge>
                            <Image src="/bookmark.svg" width={15} height={15} alt="bookmark" />
                        </div>
                    }
                    footer={<div className={styles.likes}>❤️좋아요 15개</div>}
                >
                    <main>
                        <div className={styles.createDate}>{profile.created_at}</div>
                        <div className={styles.title}>{profile.title}</div>
                    </main>
                </Card>
            ))}
        </div>
    );
};

export default FavoritesProfiles;
