<script setup lang="ts">
interface BackGround {
  url?: string | null
  css?: string
}

const props = withDefaults(defineProps<BackGround>(), {
  url: "/shizuku.png",
});
</script>

<template>
  <div
      class="bg"
      :style="{
      backgroundImage: props.css ? undefined : `url(${props.url})`,
      background: props.css,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
  />
</template>

<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
