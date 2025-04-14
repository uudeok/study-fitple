import styles from './MyProfileApplicantsPage.module.scss';
import Link from 'next/link';

const mockApplicants = [
    {
        id: 1,
        user_id: 1,
        contents: '프론트엔드 개발자 1분 더 구하고 있는데, 저희 프로젝트에 함께 하지 않으실래요??',
        status: 'waiting',
    },
    {
        id: 2,
        user_id: 2,
        contents: '저랑 같이 플젝 같이 하실래요 ? 저는 서버 개발자라 프론트엔드 개발자를 찾고 있는데 딱인거 같습니다.',
        status: 'waiting',
    },
] as const;

const USERS = {
    1: {
        name: '홍길동',
        nickname: '길동이',
        email: 'abc@email.com',
        avatar_url: '/user.svg',
        position: 'FE',
        skill: ['NEXT', 'JS', 'REACT'],
    },
    2: {
        name: '이몽룡',
        nickname: '몽룡이',
        email: 'def@email.com',
        avatar_url: '/user.svg',
        position: 'BE',
        skill: ['NODE', 'TS'],
    },
} as const;

const MyProfileApplicantsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {mockApplicants.map((applicant) => {
                    const user = USERS[applicant.user_id];
                    return (
                        <div key={applicant.id} className={styles.card}>
                            <img src={user.avatar_url} alt={user.name} className={styles.avatar} />
                            <div className={styles.info}>
                                <div className={styles.nameRow}>
                                    <strong>{user.nickname}</strong> ({user.position})
                                </div>
                                <div className={styles.skills}>{user.skill.join(' / ')}</div>
                                <div className={styles.contents}>{applicant.contents}</div>
                                <div className={styles.actions}>
                                    <Link href={`/profile/${applicant.user_id}`} className={styles.link}>
                                        프로필 보기
                                    </Link>
                                    <button className={styles.accept}>수락</button>
                                    <button className={styles.reject}>거절</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MyProfileApplicantsPage;
