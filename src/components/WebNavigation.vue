<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { Category as CategoryInterface } from '~/types/category.interface'

const breakpoints = useBreakpoints(breakpointsTailwind)

const categories = ref<CategoryInterface[]>([
  {
    id: 1,
    name: 'Productivity',
  },
  {
    id: 2,
    name: 'UI/UX',
  },
  {
    id: 3,
    name: 'Javascript',
  },
])

const mobileNav = ref(false)
</script>

<template>
  <div class="py-5 px-10 flex justify-between items-center 2xl:px-80">
    <div class="text-3xl">
      <span class="font-light text-red-400">Simple</span><span class="font-bold text-red-600">Blog</span>
    </div>

    <!-- Desktop Navigation -->
    <div v-if="breakpoints.isGreater('lg')" class="space-x-2">
      <router-link to="/" class="font-medium py-1.5 px-3 rounded-full transition hover:bg-red-100 hover:text-red-600" active-class="text-red-500">
        Home
      </router-link>
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <menu-button
            class="inline-flex justify-center items-center font-medium py-1.5 px-3 rounded-full transition hover:bg-red-100 hover:text-red-600"
          >
            Category
            <i-carbon-chevron-down
              class="w-3 h-3 ml-2 -mr-1"
              aria-hidden="true"
            />
          </menu-button>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <menu-items
            class="absolute right-0 w-56 mt-2 p-2 origin-top-right z-10 bg-white divide-y divide-gray-100 rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <menu-item v-for="(category, i) in categories" v-slot="{ active }" :key="i">
              <button
                :class="[
                  active ? 'bg-red-200 text-red-600' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                {{ category.name }}
              </button>
            </menu-item>
          </menu-items>
        </transition>
      </Menu>

      <button class="font-medium py-1.5 px-3 rounded-full transition hover:bg-red-100 hover:text-red-600" active-class="text-red-500">
        About
      </button>

      <base-button variant="primary">
        Log in
      </base-button>

      <base-button variant="fill">
        Get Started
      </base-button>
    </div>

    <!-- Mobile Navigation -->
    <div v-else>
      <button @click="mobileNav = true">
        <i-carbon-menu class="h-6 w-6 text-red-600" />
      </button>

      <transition-root as="template" :show="mobileNav">
        <Dialog as="div" class="fixed inset-0 overflow-hidden" @close="mobileNav = false">
          <div class="absolute inset-0 overflow-hidden">
            <transition-child as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <DialogOverlay class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </transition-child>
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-20">
              <transition-child as="template" enter="transform transition ease-in-out duration-300 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-300 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                <div class="pointer-events-auto relative w-screen max-w-md">
                  <transition-child as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="mobileNav = false">
                        <span class="sr-only">Close panel</span>
                        <i-carbon-close class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </transition-child>
                  <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                      <!-- Navigation -->
                      <div class="px-4 sm:px-6 space-y-3">
                        <router-link to="/" active-class="text-red-500" class="flex gap-x-2.5 items-center" @click="mobileNav = false">
                          <i-carbon-home class="h-6 w-6" />
                          <div class="text-2xl tracking-widest">
                            Home
                          </div>
                        </router-link>

                        <div v-for="(category,i) in categories" :key="i" to="/" active-class="text-red-500" class="flex gap-x-2.5 items-center" @click="mobileNav = false">
                          <i-carbon-scatter-matrix class="h-6 w-6" />
                          <div class="text-2xl tracking-widest">
                            {{ category.name }}
                          </div>
                        </div>

                        <div active-class="text-red-500" class="flex gap-x-2.5 items-center" @click="mobileNav = false">
                          <i-carbon-information class="h-6 w-6" />
                          <div class="text-2xl tracking-widest">
                            About
                          </div>
                        </div>
                      </div>
                      <!-- Navigation -->

                      <div class="absolute bottom-10 inset-x-0 px-4 sm:px-6 space-y-3">
                        <base-button variant="primary" class="w-full block">
                          Log in
                        </base-button>

                        <base-button variant="fill" class="w-full block">
                          Get Started
                        </base-button>
                      </div>
                    </div>
                  </div>
                </div>
              </transition-child>
            </div>
          </div>
        </Dialog>
      </transition-root>
    </div>
  </div>
</template>
