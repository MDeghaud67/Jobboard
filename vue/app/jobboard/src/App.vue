<template>
    <div id="app">
        <div id="nav">
            <nav id="head" class="navbar navbar-default navbar-fixed-top">
                <div class="container-fluid navbar-main">
                  <h1>Job Board</h1>
                  <router-link to="/form" v-show="this.state" right>Login / sign up</router-link>
                </div>
                <div class="container-fluid subNav top-subNav hidden-xs bg-new">
                    <ul class="nav subNav-nav hidden-xs clearfix">
                        <li><router-link to="/">Home</router-link></li>
                        <li> <router-link to="/about">About</router-link></li>
                        <li> <router-link to="/dashBoard">DashBoard</router-link></li>
                    </ul>
                </div>
            </nav>
           <router-view/>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      state: false,
      user: {
        id: ''
      }
    }
  },
  methods: {
    setState () {
      this.state = true
    },
    checkUserId () {
      if (localStorage.user !== null) {
        this.user.id = localStorage.user
        this.setState()
      }
    }
  },
  beforeMount () {
    this.checkUserId()
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
}
.subNav-nav>li{
    display: inline;
    float: none;
    text-align: left;
    margin-right: 58px;
    position: relative;
    vertical-align: top;
}
.bg-new{
    background-color: #d5d5d5;
}
.navbar{
  padding: 0;
  box-shadow: 0 15px 14px -5px rgba(100, 100, 100, 0.4);
}
.navbar-default .navbar-nav{
    float: left;
}
.navbar-fixed-top .top-subNav, .subNav-nav{
  width: 100%;
  padding: 5px 0 5px 0;
}
#nav {
    padding-top: 14px;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
ul{
  margin: 0 1% 0 1% ;
}
p{
  margin-top: 0;
}
</style>
