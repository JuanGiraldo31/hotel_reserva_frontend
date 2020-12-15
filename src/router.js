import vueRouter from 'vue-router'
import User from './components/User'
import UserPoints from './components/UserPoints'
import SearchRoom from './components/SearchRoom'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
    {
        path: '/',
        name: "root",
        component: App
    },
    {
        path: '/user/:username',
        name: "user",
        component: User
    },
    {
        path: '/user/RewardPoints/:username',
        name: "user_points",
        component: UserPoints
    },
    {
        path: '/search',
        name: "search_room",
        component: SearchRoom 
    }
    ]
})
export default router