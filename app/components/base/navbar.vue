<script setup lang="ts">
import NavbarItem from "~/components/base/navbar/navbarItem.vue"
import NavbarButton from "~/components/base/navbar/navbarButton.vue"

import { config } from "~/utils/config"

const route = useRoute()

const navbarList = config.layout.map(item => {
  return { name: item.name, link: item.link }
})

</script>

<template>
  <div class="navbar">
    <div
      class="start"
    >
      <div class="sidabarToggle">
        <span />
        <span />
        <span />
      </div>
      <a href="/">
        {{ config.name }}
      </a>
    </div>
    <div class="middle">
      <navbarItem
        v-for="(item, index) of navbarList"
        v-bind="item"
        :key="index"
        :is-actived="item.link === route.path"
      />
    </div>
    <div class="end">
      <navbarButton
        v-for="(item, index) in config.contact"
        :key="index"
        v-bind="item"
      />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  width: 100vw;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2b2b3b;
  padding: 0 2rem;
}

.start {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1rem;
  font-size: 1.25rem;
}

.start a {
  color: var(--text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.sidabarToggle {
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  border: 3px solid var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: border 0.3s ease;

  & span {
    display: block;
    width: 70%;
    height: 2px;
    background-color: var(--text);
    transition: background-color 0.3s ease;
  }
}

.sidabarToggle:active span {
  transform: scale(0.95);
}

.start:hover {
  & a {
    color: var(--text-light);
  }

  & .sidabarToggle {
    border: 3px solid var(--text-light);

    & span {
      background-color: var(--text-light);
    }
  }
}

.middle {
  display: flex;
  align-items: center;
  gap: 2rem;
  color: var(--text);
}

.end {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}
</style>
