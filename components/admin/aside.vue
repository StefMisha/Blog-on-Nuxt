<template>
  <el-menu
    :style="{height: '100%'}"
    :default-active="$route.path"
    :default-openeds="['3']"
    router
  >
    <el-menu-item index="/admin">
        <i class="el-icon-menu"></i>
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit"></i>
      <span>Создать</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-postcard"></i>
      <span>Посты</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-user"></i>
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-switch-button"></i>
      <span>Выйти</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: "aside"
}
</script>

<style scoped>

</style>
