<template>
  <div id="app">
    <h2 class="title__main"><a class="title__style" href="../">Reading Recorder</a></h2>
      <el-menu mode="horizontal" background-color="#37AB9D" text-color="#fff" active-text-color="#586365">
        <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/search">Search</router-link></el-menu-item>
      <el-submenu index="3">
        <template v-slot:title>Support</template>
        <el-menu-item id="nav" index="3-1">
          <a href="https://wings.msn.to/" target="help" class="nav-item__style">Author</a>
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



<style>
#app {
.title__main{
font-family: 'Avenir', Helvetica, Arial, sans-serif;	text-align: left;
width: 800px;
margin: 0 auto;
color: #2c3e50;	font-weight: bold;
margin-top: 60px;	margin-left:1em ;
}
}

.title__style{
  color: #666666;
   text-decoration: none;
}

.nav-item__style{
margin-bottom: 15px;
text-emphasis: none;
color: #ffffff;
}
.el-menu-item a {
color: #fff;	color: #ffffff;
}

.title__main{
  text-align: left;
  font-weight: bold;
  margin-left:1em ;
}

</style>
