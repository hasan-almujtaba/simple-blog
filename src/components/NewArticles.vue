<script setup lang="ts">
import type ArticleInterface from '~/types/article.interface'

const props = defineProps<{
  articles: ArticleInterface[]
}>()
</script>

<template>
  <div>
    <h2 class="font-bold text-2xl text-center lg:text-left lg:pl-4" data-aos="fade-up">
      New Articles
    </h2>

    <article-card v-for="(article , i) in props.articles" :key="i" :title="article.title" :image-url="article.imageUrl" :writer="article.writer" :slug="article.slug" :description="article.desc" wrapper-class="flex-col lg:flex-row !my-5" title-class="text-2xl" image-class="!w-full lg:!w-40 !h-40" show-read-more data-aos="fade-up" />
  </div>
</template>
