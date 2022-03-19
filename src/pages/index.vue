<script setup lang="ts">
import api from '~/apis'
import type ArticleInterface from '~/types/article.interface'
import { useArticle } from '~/stores/article'

const articleStore = useArticle()

const articles = ref<ArticleInterface[]>([])

const getData = async() => {
  const { data } = await api.get('/data/data.json')

  const { articles: articlesData } = data
  articles.value = articlesData

  articleStore.setCollection(articlesData)
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="container p-10 space-y-5">
    <div class="flex flex-col lg:flex-row gap-5">
      <main-article v-if="articles.length !== 0" :image="articles[0].imageUrl" :title="articles[0].title" :writer="articles[0].writer" :slug="articles[0].slug" class="lg:basis-2/3" />
      <recent-articles :articles="articles" class="lg:basis-1/3" />
    </div>

    <div class="flex flex-col-reverse lg:flex-row gap-5">
      <new-articles :articles="articles" class="lg:basis-2/3" />
      <popular-articles :articles="articles" class="lg:basis-1/3" />
    </div>
  </div>
</template>
