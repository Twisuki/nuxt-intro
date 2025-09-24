<script setup lang="ts">
interface NavigationItem {
  name: string
  link: string
}

defineProps<NavigationItem>()
</script>

<template>
  <a
    class="root"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="name">
      {{ name }}
    </div>
    <div class="underline">
      <span />
    </div>
  </a>
</template>

<style scoped>
.root {
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text);
}

.name {
  font-size: 1.125rem;
  transition: font-size 0.1s ease;
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
  background-color: var(--text);
  border-radius: 0.0625rem;
  transition: background-color 0.1s ease;
}

.root:hover {
  color: var(--text-light);
  & .name {
    font-size: 1.25rem;
  }
  & span {
    background-color: var(--text-light);
  }
}
</style>
