<script setup lang="ts">
import type ArticleInterface from '~/types/article.interface'

const props = defineProps<{
  articles: ArticleInterface[]
}>()
</script>

<template>
  <div>
    <h2 class="font-bold text-2xl text-center lg:text-left lg:pl-4" data-aos="fade-up">
      Popular Articles
    </h2>

    <ul class="list-disc p-5 lg:pl-9 space-y-1">
      <li v-for="( article, i) in props.articles" :key="i" data-aos="fade-up" class="transition hover:text-red-600">
        <router-link :to="`/article/${article.slug}`">
          {{ article.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
