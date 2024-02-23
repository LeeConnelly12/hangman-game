import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    health: 100,
  }),
  actions: {
    guessedIncorrectly() {
      this.health -= 12
    },
  },
})
