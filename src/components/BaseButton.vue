<script setup lang="ts">
const props = defineProps<{
  href?: string
  to?: string
  target?: string
  variant?: 'primary' | 'fill'
}>()

const cssClasses = ['px-5', 'py-1.5', 'rounded-full', 'capitalize', 'flex', 'items-center', 'justify-center', 'gap-x-2', 'transition', 'duration-500', 'w-full']

switch (props.variant) {
  case 'primary':
    cssClasses.push('bg-red-100', 'text-red-600', 'hover:bg-red-200')
    break
  case 'fill':
    cssClasses.push('bg-red-600', 'text-white', 'hover:bg-red-400')
    break
  default:
    break
}

</script>

<template>
  <div class="inline-block">
    <a v-if="props.href" :href="props.href" :class="cssClasses" :target="target">
      <slot />
    </a>
    <router-link v-else-if="props.to" :to="props.to" :class="cssClasses">
      <slot />
    </router-link>
    <button v-else :class="cssClasses">
      <slot />
    </button>
  </div>
</template>
