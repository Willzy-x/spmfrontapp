<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">SPM</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
<!--            <a class="nav-link" href="#"> </a>-->
            <router-link class="nav-link" to="/">主页</router-link>
          </li>
          <li class="nav-item">
<!--            <a class="nav-link" href="/login"></a>-->
            <router-link class="nav-link" to="/">课程内容</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">联系我们</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="StudentDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              学生
            </a>
            <div class="dropdown-menu" aria-labelledby="StudentDropdownMenuLink">
              <router-link class="dropdown-item" to="/student/login">学生登录</router-link>
              <router-link class="dropdown-item" to="/">学生注册</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="TeacherDropDownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              教师
            </a>
            <div class="dropdown-menu" aria-labelledby="TeacherDropDownMenuLink">
              <router-link class="dropdown-item" to="/">教师登录</router-link>
              <router-link class="dropdown-item" to="/">教师注册</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
      <router-view></router-view>
      <footer class="container">
          <p class="float-right"><a href="#">Back to top</a></p>
          <p>&copy; 2020-2020 Yucheng HU &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'
// import HelloWorld from './components/HelloWorld.vue'
//
  export default {
    name: 'App',
    components: {

    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

</style>
