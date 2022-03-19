<script setup lang="ts">
const props = defineProps<{
  title: string
  slug: string
  imageUrl: string
  writer: string
  description?: string
  wrapperClass?: string
  titleClass?: string
  imageClass?: string
  showReadMore?: true
}>()
</script>

<template>
  <router-link as="div" :to="`/article/${props.slug}`" :class="wrapperClass" class="flex items-center my-2 p-2.5 rounded-3xl gap-2 group">
    <img :src="props.imageUrl" :alt="props.title" class="w-20 h-[70px] object-cover rounded-2xl flex-none" :class="[imageClass ? imageClass : '']">
    <div>
      <h2 class="line-clamp-2 transition group-hover:text-red-600" :class="[titleClass ? titleClass : '']">
        {{ props.title }}
      </h2>
      <div class="font-bold">
        {{ props.writer }}
      </div>
      <p class="line-clamp-3">
        {{ props.description }}
      </p>
      <p v-if="showReadMore" class="text-red-600 font-bold text-center lg:text-right mt-3">
        Read more...
      </p>
    </div>
  </router-link>
</template>
