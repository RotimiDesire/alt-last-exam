<template>
  <nav>
    <div class="nav-links" v-if="$store.state.user">
     <div class="top">
       <router-link to="/">Home</router-link> |  
        <router-link to="/product">Products </router-link> | 
        <router-link to="/blog">Blog </router-link>
     </div>
     <div class="bottom">
       <button @click="$store.dispatch('logout')">LOGOUT</button>
     </div>
    </div>
    <div class="logo">
      <!-- <h3>LOGO</h3> -->
      <img src="./assets/images/logo.jpeg">
    </div>
    <div class="connect">
      <a href="#">Connect with us.</a>
    </div>
  </nav>
  <router-view/>
</template>

<script>
import { onBeforeMount } from "vue"
import { useStore } from "vuex"

export default {
  setup(){
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch("fecthUser")
    })
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

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

html, body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  /* background: pink; */
}

nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 3rem auto;
  height: 10vh;
  width: 95%;
  background: white;
}

nav a{
  font-weight: bold;
  color: darkgray;
  text-decoration: none;
  margin: 0 5px;
  font-size: 1.3rem;
}

nav a.router-link-exact-active{
  color: green;
}

button{
  padding: 8px;
  margin-top: 8px;
  font-size: .85rem;
  color: #2c3e50;
  border-radius: 5px;
  /* outline: none; */
  border: none;
}

button:hover{
  scale: .9;
}

img{
  height: 80px;
  color: #2c3e50;
}

.connect{
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
