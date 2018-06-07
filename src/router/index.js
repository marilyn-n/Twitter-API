import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import TweetsComponent from '../components/TweetsComponent.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent,
    },
    {
      path: '/tweets',
      name: 'TweetsComponent',
      component: TweetsComponent,
    },
  ],
});
