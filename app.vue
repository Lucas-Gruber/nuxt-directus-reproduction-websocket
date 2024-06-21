<script setup lang="ts">
const { connect, onWebSocket } = useDirectusRealtime()

// try {
await connect()

onWebSocket('open', function () {
  console.log({ event: 'onopen' })
})

onWebSocket('message', function (message) {
  const { type, data } = message
  console.log({ event: 'onmessage', data })
})

onWebSocket('close', function () {
  console.log({ event: 'onclose' })
})

onWebSocket('error', function (error) {
  console.log({ event: 'onerror', error })
})
// } catch (e) {
//   console.log(e)
// }
</script>

<template>
  <div>
    <h1>Websocket-Test</h1>
  </div>
</template>
