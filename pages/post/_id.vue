<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <small>
          <nuxt-link to="/">
            <i class="el-icon-d-arrow-left"></i>
          </nuxt-link>
        </small>
        <h3>Post title</h3>

      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleDateString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          228
        </small>
      </div>
      <div class="post-image">
        <img
          src="@/assets/IMG_6600.JPG"
          alt="post image"
          class="post-image"
        >
      </div>
    </header>
    <main class="post-content">
      <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci, alias, aperiam, dolore exercitationem expedita in inventore magni nihil optio possimus quas ratione repellendus reprehenderit sequi sint unde vel voluptatem!</span><span>Accusamus aliquam at commodi cum dolor eligendi enim et facilis fuga fugiat fugit ipsa ipsum maiores minus nulla omnis porro quia quidem, saepe sit totam unde veritatis voluptates? Sequi, veritatis.</span><span>Accusantium adipisci aut, autem cum esse illo ipsum nesciunt reprehenderit vitae! Aspernatur dicta eveniet ipsum itaque iure, libero, maiores, molestias necessitatibus placeat porro ratione rem repellat! In incidunt iusto voluptatum.</span>
      </p>
    </main>
    <footer>
      <!--form-->

      <div class="comments" v-if="true">
        <app-comment
          v-for="comment in 4"
          :key="comment"
          :comment="comment"

          />
      </div>
      <div v-else class="text-center">Комментариев нет</div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
export default {
  validate({params}) {
    return Boolean(params.id)
  },
  components: {
    AppComment
  }
}
</script>

<style lang="scss" scoped>
  .post {
    max-width: 1000px;
    margin: 0 auto;
  }
  .post-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .post-image img{
    width: 100%;
    height: auto;
  }
  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .post-header {
    margin-bottom: 1.5rem;
  }
  .post-content {
    margin-bottom: 2rem;
  }

</style>
