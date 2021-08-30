<template>
  <h1>Salam admin!</h1>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth']

}
</script>

<style scoped>

</style>
