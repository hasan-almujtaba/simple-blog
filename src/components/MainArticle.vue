<script setup lang="ts">
const props = defineProps<{
  image: string
  title: string
  writer: string
  slug: string
}>()
</script>

<template>
  <router-link as="div" :to="`/article/${slug}`" class="relative bg-black/70 h-[430px] rounded-3xl overflow-hidden group" data-aos="fade-up">
    <img :src="props.image" class="h-full w-full object-cover">
    <div class="absolute inset-0 bg-black/70 transition group-hover:bg-slate-600/70 text-white p-5 flex items-end">
      <div>
        <h2 class="text-2xl transition font-medium">
          {{ props.title }}
        </h2>

        <div>
          By {{ props.writer }}
        </div>
      </div>
    </div>
  </router-link>
</template>
