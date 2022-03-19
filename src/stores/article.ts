import { acceptHMRUpdate, defineStore } from 'pinia'
import type ArticleInterface from '~/types/article.interface'

export const useArticle = defineStore('article', {
  state: () => ({
    collection: [] as ArticleInterface[],
  }),
  actions: {
    setCollection(article: ArticleInterface[]) {
      this.collection = article
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useArticle, import.meta.hot))
