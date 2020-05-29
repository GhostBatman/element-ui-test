<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <div class="grid-content bg-purple">
        <el-form :rules="rules" ref="form" :model="form" label-width="120px">
          <el-form-item label="E-mail" prop="email">
            <el-input placeholder="Please input" v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input placeholder="Please input" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Login</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

const validateEmail = (rule, value, callback) => {
  const emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/
  if (emailRegex.test(value)) {
    callback()
  } else {
    callback(new Error('Please input the correct email'))
  }
}

export default {
  name: 'login',

  data: () => ({
    rules: {
      email: [
        { validator: validateEmail, trigger: 'blur' },
        { required: true, message: 'Please input Email', trigger: 'blur' }
      ],
      password: [
        { required: true, message: 'Please input password', trigger: 'blur' }
      ]
    },
    form: {
      email: '',
      password: ''
    }
  }),
  computed: {
    ...mapGetters({ IS_AUTH: 'IS_AUTH' })
  },
  mounted() {
    if (this.IS_AUTH) {
      this.$router.push({ name: 'main' })
    }
  },
  methods: {
    ...mapMutations({
      SET_AUTH: 'SET_AUTH'
    }),
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.SET_AUTH(true)
          this.$router.push({ name: 'users' })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>