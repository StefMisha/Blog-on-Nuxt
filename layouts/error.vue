<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">Ошибка 404</h1>
        <nuxt-link to="/">Home</nuxt-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>
  .error-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;
  }
  .error-title {
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    color: #972323;
    margin-bottom: 1rem;
  }
</style>
