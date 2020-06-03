<template>
  <div id="app">
    <h2 class="title__main">Reading Recoder</h2>
      <el-menu mode="horizontal" background-color="#37AB9D" text-color="#fff" active-text-color="#586365">
        <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/serch">Serch</router-link></el-menu-item>
      <el-submenu index="3">
        <template v-slot:title>Supprt</template>
        <el-menu-item  index="3-1">
          <a href="https://wings.msc.to/" target="help" class="nav-item__style">Author</a>
        </el-menu-item>
        <el-menu-item index="3-2">
          <a href="https://www.sbcr.jp/" target="help" class="nav-item__style">Publisher</a>
        </el-menu-item>
      </el-submenu>
      </el-menu>
    <router-view/>
  </div>
</template>



<script>
export default {
  name: 'app'
}
</script>



<style lang="scss" scoped>
.title__main{
  text-align: left;
  font-weight: bold;
  margin-left:1em ;
}
.nav-item__style{
  text-emphasis: none;
  color: #ffffff;
}
</style>
