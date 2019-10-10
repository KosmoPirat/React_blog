import Main from '../pages/Main';
import Users from '../pages/Users';
import User from '../pages/User';
import PageNotFound from '../pages/PageNotFound';

export default [
    {
        path: '/',
        component: Main,
        exact: true
    },
    {
        path: '/users',
        component: Users,
        exact: true
    },
    {
        path: '/users/:userId',
        component: User,
        exact: false
    },
    {
        path: '*',
        component: PageNotFound,
        exact: true
    },
];