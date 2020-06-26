<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="page-name">
          <span>
            {{$route.name}}
          </span>
        </div>
      </el-header>
    </el-container>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.page-name {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
