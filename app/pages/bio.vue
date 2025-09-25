<script setup lang="ts">
import { getContent } from "~/utils/markdown";

definePageMeta({
  layout: "pages",
})

const { data } = await useAsyncData(
    'bio',
    () => getContent('bio.md')
)
</script>

<template>
  <div class="main">
    <div v-html="data?.html" class="prose"></div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
</style>
