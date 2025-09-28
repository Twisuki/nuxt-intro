<script setup lang="ts">
import NavbarButton from "~/components/base/navbar/navbarButton.vue"
import NavbarItem from "~/components/base/navbar/navbarItem.vue"

import { config } from "~/utils/config"
import { useLocalState } from "~/utils/useLocalState"

const route = useRoute()

const navbarList = config.layout.map((item) => {
  return { name: item.name, link: item.link }
})

const isDark = useLocalState<boolean>("isDark", false)
const toggleTheme = () => {
  isDark.value = !isDark.value
}

const isNavbarActived = useLocalState<boolean>("isNavbarActived", false)
const toggleNavbar = () => {
  isNavbarActived.value = !isNavbarActived.value
}
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
    <div class="end">
      <div
        ref="themeElementRef"
        class="theme"
        :class="{ dark: isDark }"
        @click="toggleTheme"
      >
        <i class="fa-solid fa-sun theme__light" />
        <i class="fa-solid fa-moon theme__dark" />
      </div>
      <div
        class="navbarToggle"
        @click="toggleNavbar"
      >
        <i
          class="fa-solid fa-arrow-up"
          :class="{ actived: isNavbarActived }"
        />
      </div>
    </div>
    <div
      class="navbarBody"
      :class="{ actived: isNavbarActived }"
    >
      <div class="navbarBody__start">
        <navbarItem
          v-for="(item, index) of navbarList"
          v-bind="item"
          :key="index"
          :is-actived="item.link === route.path"
        />
      </div>
      <div class="navbarBody__end">
        <navbarButton
          v-for="(item, index) in config.contact"
          :key="index"
          v-bind="item"
        />
      </div>
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
  overflow: hidden;
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
  background-color: var(--text-light);
}

.end {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

.theme {
  position: relative;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--text);
}

.theme i {
  position: absolute;
  display: block;
  transition: opacity 0.3s ease;
}

/* light 状态 */
.theme {
  & .theme__light {
    opacity: 1;
  }
  & .theme__dark {
    opacity: 0;
  }
}

/* dark 状态 */
.theme.dark {
  & .theme__light {
    opacity: 0;
  }
  & .theme__dark {
    opacity: 1;
  }
}

.navbarToggle {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--text);
}

.navbarToggle i {
  display: block;
  transform: rotate(0);
  transition: transform 0.3s ease;
}

.navbarToggle i.actived {
  transform: rotate(-90deg);
}

.navbarBody {
  position: fixed;
  width: 100vw;
  top: 4rem;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b2b3b;
  padding: 0 2rem;
  z-index: 100;
  transform: translateY(calc(-100% - 4rem));
  transition: transform 0.3s ease;
}

.navbarBody__start {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbarBody__end {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
}

.navbarBody.actived {
  transform: translateY(0);
}
</style>
