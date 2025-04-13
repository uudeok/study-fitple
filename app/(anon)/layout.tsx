import { ReactNode } from 'react';
import RootHeader from './components/layout/RootHeader';
import RootFooter from './components/layout/RootFooter';

type DefaultLayoutProps = {
    hideFooter?: boolean;
    hideHeader?: boolean;
    children: ReactNode;
};

const DefaultLayout = ({ hideFooter = false, hideHeader = false, children }: DefaultLayoutProps) => {
    const FOOTER_HEIGHT = '305px';
    const GHB_HEIGHT = '62px';

    return (
        <>
            {!hideHeader && <RootHeader />}
            <main
                style={{
                    minHeight: `calc(100vh${!hideHeader ? ` - ${GHB_HEIGHT}` : 0}${
                        !hideFooter ? ` - ${FOOTER_HEIGHT}` : 0
                    })`,
                }}
            >
                {children}
            </main>
            {!hideFooter && <RootFooter />}
        </>
    );
};

export default DefaultLayout;
