import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import OrderPage from '../views/OrderPage.vue';
import BagPage from '../views/BagPage.vue';
import SummaryPage from '../views/SummaryPage.vue';
import ReceivedPage from '../views/ReceivedPage.vue';
import LoyaltyPage from '../views/LoyaltyPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/orderpage',
    name: 'Orderpage',
    component: OrderPage
  },
  {
    path: '/bagpage',
    name: 'Bagpage',
    component: BagPage
  },
  {
    path: '/summarypage',
    name: 'Summarypage',
    component: SummaryPage
  },
  {
    path: '/receivedpage',
    name: 'Receivedpage',
    component: ReceivedPage
  },
  {
    path: '/loyaltypage',
    name: 'Loyaltypage',
    component: LoyaltyPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
