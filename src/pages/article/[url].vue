<script setup lang="ts">
import api from '~/apis'
import { useArticle } from '~/stores/article'
import type ArticleInterface from '~/types/article.interface'

const route = useRoute()

const articleStore = useArticle()

if (articleStore.collection.length === 0) {
  const getData = async() => {
    const { data } = await api.get('/data/data.json')
    const { articles: articlesData } = data

    articleStore.setCollection(articlesData)
  }

  onMounted(() => {
    getData()
  })
}

const filteredArticle = computed<ArticleInterface>(() => {
  return articleStore.collection.filter(item => item.slug === route.params.url)[0]
})

</script>

<template>
  <div class="container mx-auto p-10">
    <div v-if="filteredArticle">
      <div data-aos="fade-up">
        Posted by <span class="font-semibold text-red-600">{{ filteredArticle.writer }}</span>
        - {{ filteredArticle.created_at }}
      </div>
      <h1 data-aos="fade-up" class="text-2xl lg:text-3xl font-bold mb-5">
        {{ filteredArticle.title }}
      </h1>
      <img data-aos="fade-up" :src="filteredArticle.imageUrl" :alt="filteredArticle.title" class="w-full h-52 lg:h-[450px] object-cover rounded-3xl mb-5">
      <div class="leading-loose space-y-3" data-aos="fade-up">
        <p>
          {{ filteredArticle.desc }}
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ducimus maiores, architecto pariatur aliquid temporibus ea aperiam harum tempore perspiciatis minima deleniti nemo libero fugit doloremque iste molestiae laudantium cumque mollitia incidunt natus, dolorem impedit. Minima eligendi ducimus hic illo quibusdam omnis optio placeat, tempore obcaecati nulla animi consequatur!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, dolores debitis. Libero saepe pariatur vero sed iste nisi, sequi natus asperiores. Exercitationem placeat perferendis cum optio dolor facere sint labore modi mollitia neque quibusdam porro, suscipit, dolorem sit nihil hic quod. Reprehenderit sit voluptas, accusantium eius, reiciendis atque vero ad asperiores libero fuga in at blanditiis consectetur hic ducimus nam nulla recusandae ipsam ratione excepturi autem sunt maxime tempore officia. Quibusdam sunt non provident modi fugiat quae reprehenderit eligendi ratione!
        </p>
      </div>
    </div>

    <div class="flex justify-center items-center gap-3 mt-10">
      <button class="group">
        <i-carbon-logo-facebook class="text-red-600 h-7 w-7 transition group-hover:text-red-300" />
      </button>
      <button class="group">
        <i-carbon-logo-twitter class="text-red-600 h-7 w-7 transition group-hover:text-red-300" />
      </button>
      <button class="group">
        <i-carbon-logo-instagram class="text-red-600 h-7 w-7 transition group-hover:text-red-300" />
      </button>
    </div>
  </div>
</template>
