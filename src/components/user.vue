<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-avatar :size="100" :src="user.avatar_url"></el-avatar>
      </el-col>
      <el-col :span="20" class="user-data">
        <template v-for="(value, name) in userData">
          <div class="user-item" v-if="value" :key="name">
            <div class="name">{{ name }}</div>
            <div class="value">{{ value }}</div>
          </div>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'user',
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapGetters({ user: 'GET_USER' }),
    userData() {
      const {
        login,
        name,
        company,
        location,
        email,
        bio
      } = this.user

      return { login, name, company, location, email, bio }
    },
  },
  async created() {
    const { username } = this.$route.params
    try {
      await this.GET_USER(username)
    } catch (e) {
      this.errorNotify()
      this.$router.push({ name: 'users' })
    }

  },
  methods: {
    ...mapActions({ GET_USER: 'GET_USER' }),
    errorNotify() {
      this.$notify.error({
        title: 'Error',
        message: 'Responce error'
      })
    },
  }
}
</script>

<style scoped>
.user-data {
  text-align: left;
  padding: 12px;
  box-sizing: border-box;
}
.user-item {
  display: flex;
  width: 100%;
  font-size: 14px;
  margin-bottom: 8px;
}
.user-item .name {
  width: 100px;
  flex-shrink: 0;
  text-transform: capitalize;
}

.user-item .value {
  flex-grow: 1;
}
</style>