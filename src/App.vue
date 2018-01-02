<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
  <div id="wrapper">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img src="./assets/clock.svg" alt="">
          Vue Time Tracker
        </a>
        <ul class="navbar-nav">
          <li class="nav-item"><router-link to="/home" class="nav-link">Home</router-link></li>
          <li class="nav-item"><router-link to="/time-entries" class="nav-link">Time Entries</router-link ></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">

      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
