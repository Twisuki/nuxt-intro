import { ref, watch, onMounted } from "vue"

export const useLocalState = <T>(key: string, initValue: T, overwrite = false) => {
  const state = ref<T>(initValue)

  onMounted(() => {
    // 客户端初始化逻辑
    try {
      const storedState = localStorage.getItem("persistentState")
      const stateStore = storedState ? JSON.parse(storedState) : {}

      if (!(key in stateStore) || overwrite) {
        stateStore[key] = initValue
        localStorage.setItem("persistentState", JSON.stringify(stateStore))
      }

      state.value = stateStore[key]

      watch(state, (newValue) => {
        const updatedStore = { ...stateStore, [key]: newValue }
        localStorage.setItem("persistentState", JSON.stringify(updatedStore))
      }, { deep: true })
    }
    catch (error) {
      console.error("State management error:", error)
    }
  })

  return state
}
