<script setup lang="ts">
  const layout = "test";
</script>

<template>
  <div>
    <h1>Title</h1>
    <NuxtLayout :name="layout" >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
