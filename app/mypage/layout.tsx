import { ReactNode } from 'react';
import styles from './layout/MypageLayout.module.scss';
import RootHeader from '../(anon)/components/layout/RootHeader';
import RootFooter from '../(anon)/components/layout/RootFooter';
import Sidebar from './layout/Sidebar';

type DefaultLayoutProps = {
    hideFooter?: boolean;
    hideHeader?: boolean;
    children: ReactNode;
};

const MypageLayout = ({ hideFooter = false, hideHeader = false, children }: DefaultLayoutProps) => {
    const FOOTER_HEIGHT = '305px';
    const GHB_HEIGHT = '62px';

    return (
        <>
            {!hideHeader && <RootHeader />}
            <main
                style={{
                    minHeight: `calc(100vh${!hideHeader ? ` - ${GHB_HEIGHT}` : ''}${
                        !hideFooter ? ` - ${FOOTER_HEIGHT}` : ''
                    })`,
                    display: 'flex',
                }}
            >
                <aside className={styles.side}>
                    <Sidebar />
                </aside>

                <section className={styles.section}>{children}</section>
            </main>
            {!hideFooter && <RootFooter />}
        </>
    );
};

export default MypageLayout;
