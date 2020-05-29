<template>
  <el-row :gutter="20" class="table-container">
    <el-col :span="16">
      <el-table
        :data="users"
        style="width: 100%"
        stripe
      >
        <el-table-column
          fixed
          label="ID"
          width="50">
          <template slot-scope="scope">
            <span>#{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed
          label="Avatar"
          width="80"
          height="40"
        >
          <template slot-scope="scope">
            <el-avatar :size="40" :src="scope.row.avatar_url"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column
          fixed
          prop="login"
          label="Login">
        </el-table-column>
        <el-table-column
          label="Operations">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleMoreDetails(scope.row)">
              More details
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'users',
  computed: {
    ...mapGetters({users: 'GET_USERS'})
  },
  methods: {
    ...mapActions({ GET_USERS: 'GET_USERS' }),
    handleMoreDetails({login: username}) {
      this.$router.push({ name: 'user', params: { username }})
    }
  },
  created() {
    this.GET_USERS()
  }
}
</script>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
}
</style>