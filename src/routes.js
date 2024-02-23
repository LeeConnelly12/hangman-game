import MainMenu from '@/components/pages/MainMenu.vue'
import HowToPlay from '@/components/pages/HowToPlay.vue'
import PickACategory from '@/components/pages/PickACategory.vue'
import Game from '@/components/pages/Game.vue'

export default [
  {
    path: '/',
    component: MainMenu,
    name: 'menu',
    meta: {
      title: 'Menu',
    },
  },
  {
    path: '/how-to-play',
    component: HowToPlay,
    name: 'how-to-play',
    meta: {
      title: 'How to play',
    },
  },
  {
    path: '/pick-a-category',
    component: PickACategory,
    name: 'pick-a-category',
    meta: {
      title: 'Pick a category',
    },
  },
  {
    path: '/game',
    component: Game,
    name: 'game',
    meta: {
      title: 'Game',
    },
  },
]
