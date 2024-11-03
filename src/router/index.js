import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue'; // Verifique se o caminho está correto
import RecoverPasswordView from '../views/RecoverPasswordView.vue';
import RegisterView from '../views/RegisterView.vue';


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/recover-password', 
    name: 'RecoverPassword',
    component: RecoverPasswordView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  }
  // Adicione outras rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
