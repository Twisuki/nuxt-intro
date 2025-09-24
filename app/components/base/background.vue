<script setup lang="ts">
interface BackGround {
  src?: string | null
  css?: object
}

const props = defineProps<BackGround>()
const defaultCSS = {
  background: "#2b2b3b",
}

const backgroundStyle = () => {
  // 默认样式
  if (props.src === undefined && props.css === undefined) {
    return {
      backgroundImage: undefined,
      ...defaultCSS,
    }
  }

  // src = null, 不使用背景
  if (props.src === null) {
    return {
      backgroundImage: undefined,
    }
  }

  return {
    backgroundImage: `url(${props.src})`,
    ...props.css,
  }
}
</script>

<template>
  <div
    class="bg"
    :style="{
      ...backgroundStyle(),
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
