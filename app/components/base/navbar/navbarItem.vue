<script setup lang="ts">
import { config } from "~/utils/config"

interface NavbarItem {
  name: string
  link: string
  isActived: boolean
}

defineProps<NavbarItem>()
</script>

<template>
  <a
    :href="`${config.base}${link}`"
    rel="noopener noreferrer"
    :class="isActived ? 'active' : ''"
    class="root"
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
  text-decoration: none;
}

.name {
  color: var(--text);
  font-size: 1.125rem;
  transition: color 0.3s ease;
}

.underline {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.underline span {
  display: block;
  width: 0;
  height: 0.125rem;
  background-color: var(--text);
  border-radius: 0.0625rem;
  transition: width 0.3s ease;
}

.root.active {
  & .name {
    color: var(--text-light);
  }

  & .underline span {
    width: 100%;
    background-color: var(--text-light);
  }
}

.root:hover {
  & .name {
    color: var(--text-light);
  }

  & .underline span {
    width: 100%;
    background-color: var(--text-light);
  }
}

/* 移动设备 768 - */
@media (max-width: 767px) {
  .root {
    height: 2rem;
  }

  .name {
    font-size: 1rem;
  }
}
</style>
