'use client';

import { useDeviceSize } from '@/hooks/useDeviceSize';
import styles from './RootFooter.module.scss';

const RootFooter = () => {
    const { deviceType } = useDeviceSize();
    const isMobile = deviceType === 'mobile';

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <span>서비스 소개 &gt;</span>
                    <span>콘테스트 Q&amp;A &gt;</span>
                </div>
                {!isMobile && (
                    <div className={styles.contact}>
                        <div className={styles.hours}>
                            <div>상담시간</div>
                            <div>평일 11:00 ~ 17:00</div>
                            <div>점심 12:30 ~ 13:30</div>
                            <div>(주말, 공휴일은 제외)</div>
                        </div>
                        <div className={styles.email}>
                            <div>이메일</div>
                            <span>help@stunning.kr</span>
                        </div>
                    </div>
                )}
            </div>
        </footer>
    );
};

export default RootFooter;
