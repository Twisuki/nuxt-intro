<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import Background from "~/components/base/background.vue"
import Navbar from "~/components/base/navbar/navbar.vue"
import NavbarTablet from "~/components/base/navbar/navbarTablet.vue"

const isDesktop = ref<boolean>(false)
let mediaQuery: MediaQueryList

onMounted(() => {
  mediaQuery = window.matchMedia("(min-width: 1025px)")
  isDesktop.value = mediaQuery.matches
  mediaQuery.addEventListener("change", handleMediaChange)
})

onBeforeUnmount(() => {
  mediaQuery.removeEventListener("change", handleMediaChange)
})

const handleMediaChange = (e: MediaQueryListEvent) => {
  isDesktop.value = e.matches
}
</script>

<template>
  <div class="pages">
    <background
      :src="'/shizuku.png'"
      :css="{
        filter: 'brightness(0.5)',
      }"
    />

    <navbar v-if="isDesktop" />
    <navbar-tablet v-else />

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.pages {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  width: 100%;
  overflow-y: auto;
}
</style>
