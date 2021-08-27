<template>
  <el-card
  shadow="always"
  :style="{width:'500px'}"
  >
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <h1>Войти в админку</h1>

      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>
      <div class="mb2">
        <el-form-item label="Пароль" prop="password">
          <el-input v-model.trim="controls.password" type="password" />
        </el-form-item>
      </div>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Войти

        </el-button>
      </el-form-item>
    </el-form>
  </el-card>

</template>

<script>
export default {
  name: "login",
  layout: "empty",
  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Введите логин', trigger: 'blur' },
          { min: 3, max: 15, message: 'Логин не меньше 3 и не больше 15', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Введите пароль', trigger: 'blur' },
          { min:6, message: 'Пароль не менее 6 символов', trigger: "blur"}
        ],
        desc: [
          { required: true, message: 'Please input activity form', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('you login')
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
