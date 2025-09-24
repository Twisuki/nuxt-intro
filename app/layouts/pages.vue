<script setup lang="ts">
import Background from "~/components/base/background.vue"
import Navbar from "~/components/base/navbar.vue"
</script>

<template>
  <div class="pages">
    <background
      :src="'/shizuku.png'"
      :css="{
        filter: 'brightness(0.5)',
      }"
    />

    <navbar />

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
