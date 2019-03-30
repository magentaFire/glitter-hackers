import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Test from '@/components/Test';
import Profile from '@/components/Profile';
import Register from '@/components/Register';
import Login from '@/components/Login';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
