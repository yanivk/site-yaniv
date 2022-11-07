import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage.vue'
import SkillsPage from '@/views/pages/SkillsPage.vue'
import ContactPage from '@/views/pages/ContactPage.vue'
import ProjectsPage from '@/views/pages/ProjectsPage.vue'
import ChoosePlayer from '@/views/games/tic-tac-toe/ChoosePlayer.vue'
import TicTacToe from '@/views/games/tic-tac-toe/TicTacToeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/skills',
    name: 'SkillsPage',
    component: SkillsPage
  },
  {
    path: '/projects',
    name: 'ProjectsPage',
    component: ProjectsPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/choose-player',
    name: 'ChoosePage',
    component: ChoosePlayer
  },
  {
    path: '/play',
    name: 'play',
    component: TicTacToe
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
