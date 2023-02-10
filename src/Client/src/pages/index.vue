<script setup lang="ts">
const res = ref('')
const fetchMessage = async () => {
  const { data } = await http.get('/hello')

  res.value = data.message
}
fetchMessage()
</script>

<template>
  <div>
    Message from server: {{ res }}
  </div>
</template>
