import Menu from '@/components/pages/Menu.vue'
import HowToPlay from '@/components/pages/HowToPlay.vue'
import PickACategory from '@/components/pages/PickACategory.vue'

export default [
  {
    path: '/',
    component: Menu,
    name: 'Menu',
  },
  {
    path: '/how-to-play',
    component: HowToPlay,
    name: 'How to play',
  },
  {
    path: '/pick-a-category',
    component: PickACategory,
    name: 'Pick a category',
  },
]
