<script setup lang="ts">
interface NavigationItem {
  name: string
  icon: Element | string
  link: string
}

defineProps<NavigationItem>()
</script>

<template>
  <div class="root">
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        v-if="typeof icon === 'string'"
        :class="icon"
      />
      <component
        :is="icon"
        v-else
      />
    </a>
  </div>
</template>

<style scoped>
.root {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.root a {
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--text);
  transition: transform 0.3s ease;
}

.root a:hover {
  transform: rotate(15deg) scale(1.1);
  color: var(--text-light);
}

.root i {
  font-size: 2rem;
}
</style>
