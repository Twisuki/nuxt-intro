<script setup lang="ts">
interface NavbarButton {
  name: string
  icon: Element | string
  link: string
}

defineProps<NavbarButton>()
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
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.root a {
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--text);
  transition: transform 0.3s ease;
}

.root a:hover {
  color: var(--text-light);
}

.root i {
  font-size: 1.5rem;
}
</style>
