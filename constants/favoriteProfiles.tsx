import { TPositions, TSkills } from './favoriteProjects';

export type TProfileStatus = 'open' | 'closed';

export type TProfile = {
    id: number;
    user_id: number;
    title: string;
    description: string;
    status: TProfileStatus;
    position: TPositions[];
    skills: TSkills[];
    created_at: string;
    updated_at: string;
};

export const FAVORITES_PROFILES: TProfile[] = [
    {
        id: 1,
        user_id: 10,
        title: '안녕하세요 1년차 프론트엔드 개발자 홍길동 입니다.',
        description: '안녕하세요. 저는 1년차 프론트엔드 개발자 입니다. Next.js 로 서비스를 만든 경험이 있습니다.',
        status: 'open',
        position: ['FE'],
        skills: ['Next', 'JS'],
        created_at: '2025-04-13',
        updated_at: '2025-04-13',
    },
    {
        id: 2,
        user_id: 11,
        title: '안녕하세요 신입 백엔드 개발자 고길동 입니다.',
        description: '안녕하세요. 저는 신입 백엔드 개발자 입니다.',
        status: 'open',
        position: ['BE'],
        skills: ['Go'],
        created_at: '2025-04-10',
        updated_at: '2025-04-10',
    },
    {
        id: 3,
        user_id: 12,
        title: '안녕하세요 디자이너 입니다.',
        description: '안녕하세요. 저는 디자이너입니다. 간단한 개발도 할 수 있어요.',
        status: 'open',
        position: ['FE'],
        skills: ['Next', 'JS'],
        created_at: '2025-04-09',
        updated_at: '2025-04-09',
    },
    {
        id: 4,
        user_id: 13,
        title: '저는 프론트엔드 개발자입니다. Next.js 로 서비스 만든 경험이 있어요.',
        description: '안녕하세요. 저는 1년차 프론트엔드 개발자 입니다. Next.js 로 서비스를 만든 경험이 있습니다.',
        status: 'open',
        position: ['FE'],
        skills: ['Next', 'JS'],
        created_at: '2025-04-07',
        updated_at: '2025-04-07',
    },
    {
        id: 5,
        user_id: 14,
        title: 'UI/UX 고민하는 개발자 유재석 입니다.',
        description: '안녕하세요. 저는 1년차 프론트엔드 개발자 입니다. Next.js 로 서비스를 만든 경험이 있습니다.',
        status: 'open',
        position: ['FE'],
        skills: ['Next', 'JS'],
        created_at: '2025-04-01',
        updated_at: '2025-04-01',
    },
];
