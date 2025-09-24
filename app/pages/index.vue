<script setup lang="ts">
import Background from "~/components/base/background.vue"
import navigationItem from "~/components/index/navigationItem.vue"
import ContactItem from "~/components/index/contactItem.vue"

const navigationList = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
]

const contactList = [
  { name: "Github", icon: "fa-brands fa-github", link: "" },
  { name: "Twitter", icon: "fa-brands fa-x-twitter", link: "" },
  { name: "LinkedIn", icon: "fa-brands fa-linkedin-in", link: "" },
  { name: "Email", icon: "fa-solid fa-envelope", link: "" },
]
</script>

<template>
  <div class="body">
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
            <span>Twisuki</span>
          </div>
          <div class="title__welcome">
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
.body {
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
