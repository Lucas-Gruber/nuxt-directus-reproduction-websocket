<script setup lang="ts">
const { connect } = useDirectusRealtime()

try {
  await connect()
} catch (e) {
  console.log(e)
}
</script>

<template>
  <div>
    <h1>Websocket-Test</h1>
  </div>
</template>
