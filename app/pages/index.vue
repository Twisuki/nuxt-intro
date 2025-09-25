<script setup lang="ts">
import Background from "~/components/base/background.vue"
import navigationItem from "~/components/index/navigationItem.vue"
import ContactItem from "~/components/index/contactItem.vue"

import { config } from "~/utils/config"

const navigationList = [
  { name: "Bio", link: "/bio" },
  { name: "Resume", link: "/resume" },
  { name: "Competitions", link: "/competitions" },
  { name: "Awards", link: "/awards" },
  { name: "Research", link: "/research" },
]

const contactList = [
  { name: "Github", icon: "fa-brands fa-github", link: "" },
  { name: "Twitter", icon: "fa-brands fa-x-twitter", link: "" },
  { name: "LinkedIn", icon: "fa-brands fa-linkedin-in", link: "" },
  { name: "Email", icon: "fa-solid fa-envelope", link: "" },
]

onMounted(() => {
  titleTyping()
})

const titleWelcomeRef = ref<Element | null>(null)
const typingSpeed = 15
const titleTyping = () => {
  if (titleWelcomeRef.value) {
    const text = titleWelcomeRef.value.textContent || ""
    let index = 0
    titleWelcomeRef.value.textContent = ""
    const typing = () => {
      if (index < text.length) {
        titleWelcomeRef.value.textContent += text.charAt(index)
        index++
        setTimeout(typing, 1000 / typingSpeed)
      }
    }
    typing()
  }
}
</script>

<template>
  <div class="index">
    <background
      :src="'/shizuku.png'"
      :css="{
        filter: 'brightness(0.5)',
      }"
    />

    <div class="container">
      <div class="title">
        <div class="title__avatar">
          <img
            src="/avatar.png"
            alt="avatar"
          >
        </div>
        <div class="title__intro">
          <div class="title__name">
            <span>{{ config.name }}</span>
          </div>
          <div
            ref="titleWelcomeRef"
            class="title__welcome"
          >
            <span>Welcome to Twisuki ~</span>
          </div>
        </div>
      </div>
      <div class="navigation">
        <navigationItem
          v-for="(item, index) in navigationList"
          :key="index"
          v-bind="item"
        />
      </div>
      <div class="contact">
        <contactItem
          v-for="(item, index) in contactList"
          :key="index"
          v-bind="item"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.index {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 25rem;
  display: flex;
  flex-direction: column;
}

.title {
  height: 10rem;
  display: flex;
}

.title__avatar {
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title__avatar img {
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.title__avatar:hover img {
  transform: scale(1.1);
}

.title__intro {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  color: var(--text-light);
}

.title__name {
  font-size: 2rem;
  font-weight: bold;
}

.title__welcome {
  font-size: 1.125rem;
}

.navigation {
  margin-top: -1rem;
  color: #ffffff;
}

.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: #ffffff;
}
</style>
