<template>
  <el-card class="comment">
    <div class="comment-header">
      <span>Person name</span>
      <span>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleDateString() }}
      </span>
    </div>
    <div class="comment-text">
      Lorem ipsum dolor sit amet, consectetur.
    </div>
  </el-card>
</template>

<script>
export default {
  name: "comment",
  props: {
    comment: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment {
    margin-bottom: 1rem;
  }

  .comment-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: .8rem;
  }
  //.name {
  //
  //}
</style>
