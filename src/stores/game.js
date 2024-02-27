import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    health: 100,
  }),
  actions: {
    guessedIncorrectly() {
      if (this.health <= 12) {
        this.health = 0
        return
      }

      this.health -= 12
    },
  },
})
