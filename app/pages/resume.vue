<script setup lang="ts">
import { getContent } from "~/utils/markdown"

definePageMeta({
  layout: "pages",
})

const { data } = await useAsyncData(
  "bio",
  () => getContent("resume.md"),
)
</script>

<template>
  <div class="main">
    <div
      class="prose"
      v-html="data?.html"
    />
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
