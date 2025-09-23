<script setup lang="ts">
interface NavigationItem {
  name: string
  link: string
}

defineProps<NavigationItem>()
</script>

<template>
  <div class="root">
    <div class="name">
      {{ name }}
    </div>
    <div class="underline">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.root {
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.name {
  font-size: 1.125rem;
}

.underline {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.underline span {
  display: block;
  width: 90%;
  height: 0.125rem;
  background-color: #000000;
  border-radius: 0.0625rem;
}
</style>
