<template>
  <el-container>
    <el-header>
      <app-navigation/>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
import AppNavigation from '@/components/main/navigation'

export default {
  name: "default",

  components: {
    AppNavigation
  }
}
</script>

<style scoped>

</style>
