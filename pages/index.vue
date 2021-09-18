<template>
  <el-row type="flex" justify="center">
    <el-col :ex="16" :sm="13" :md="10" :lg="7">
      <app-post
      v-for="post in 3"
      :key="post"
      />
    </el-col>
  </el-row>
</template>

<script>

import AppPost from '@/components/main/post'


export default {
  head: {
    title: 'Главная'
  },
  components: {
    AppPost
  }
}
</script>
