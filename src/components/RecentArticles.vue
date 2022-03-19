<script setup lang="ts">
import type ArticleInterface from '~/types/article.interface'

const props = defineProps<{
  articles: ArticleInterface[]
}>()

</script>

<template>
  <div>
    <h2 class="font-bold text-2xl text-center lg:text-left" data-aos="fade-up">
      Recent Articles
    </h2>

    <template v-for="(article , i) in props.articles" :key="i">
      <article-card v-if="i !== 0" :title="article.title" :image-url="article.imageUrl" :writer="article.writer" :slug="article.slug" data-aos="fade-up" />
    </template>
  </div>
</template>
