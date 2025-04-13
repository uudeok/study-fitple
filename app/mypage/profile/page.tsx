import Badge from '@/common/Badge';
import styles from './MyProfile.module.scss';
import { MY_PROFILE } from '@/constants/myProfile';
import Button from '@/common/Button';

const profile = [
    { key: '포지션', value: MY_PROFILE.position.join(', ') },
    { key: '게시일자', value: MY_PROFILE.created_at },
    { key: '수정날짜', value: MY_PROFILE.updated_at },
    { key: '상태', value: MY_PROFILE.status === 'open' ? '제안 열려있음' : '제안 닫혀있음' },
];

const ProfilePage = () => {
    return (
        <div className={styles.contaier}>
            <div className={styles.profileContainer}>
                <header className={styles.title}>{MY_PROFILE.title}</header>

                <div className={styles.infoSection}>
                    <div className={styles.row}>
                        {profile.map((p, i) => (
                            <div key={i}>
                                <span className={styles.label}> {p.key}</span>
                                <span>{p.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.row}>
                        <div>
                            <span className={styles.label}>기술스택</span>
                            {MY_PROFILE.skills.map((skill) => (
                                <Badge key={skill}>{skill}</Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.descriptionSection}>{MY_PROFILE.description}</div>
            </div>
            <div className={styles.reviseBtn}>
                <Button role="confirm" size="sm">
                    수정하기
                </Button>
            </div>
        </div>
    );
};

export default ProfilePage;
