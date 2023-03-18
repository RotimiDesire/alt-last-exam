<template>
 <div class="access">
  <section class="forms">
   <form class="register" @submit.prevent="register">
    <h2>Register</h2>
    <label>Email Address</label> <br/>
    <input type="email" placeholder="Email Address" v-model="register_form.email"> <br/>
    <label>Password</label> <br/>
    <input type="password" placeholder="Password" v-model="register_form.password"> <br/>
    <input class="submit" type="submit" value="Register">
   </form>
   <form class="login" @submit.prevent="login">
    <h2>Login</h2>
    <label>Email Address</label> <br/>
    <input type="email" placeholder="Email Address" v-model="login_form.email"> <br/>
    <label>Password</label> <br/>
    <input type="password" placeholder="Password" v-model="login_form.password"> <br/>
    <input class="submit" type="submit" value="Login">
   </form>
  </section>
 </div>
</template>

<script>
  import { ref } from "vue"
  import { useStore } from "vuex"

  export default {
   setup(){
    const register_form = ref({})
    const login_form = ref({})
    const store = useStore()

    const register= () => {
     store.dispatch("register", register_form.value)
    }

    const login = () => {
   store.dispatch("login", login_form.value)
  }

    return {
     register_form,
     login_form,
     login,
     register
    }
   }
  }
</script>

<style scoped>
.forms{
  display: flex ;
  min-height: 80vh;
  width: 80%;
  margin: 0 auto;
}

form{
 flex: 1 1 0%; 
 padding: 4rem 1.2rem;
}

h2{
  font-size: 2rem;
}

input{
  margin-bottom: 1rem;
  width: 65%;
  padding: .5rem;
  font-size: 1rem;
  outline: none;
}

.submit{
  margin-top: .5rem;
  padding: .3rem;
  width: 35%;
  text-transform: uppercase;
  font-size: .9rem;
}

.submit:hover{
  scale: .9;
}

form.register{
  color: white;
  background-color: #2c3e50;
  height: 50vh;
}

form.login{
  color: white;
  /* background-color: #3f4d5c; */
  background-color: #28303b;
  height: 50vh;
}


 @media only screen and (max-width: 550px) {
  .forms{
  display: flex ;
  flex-direction: column;
  /* min-height: 80vh;
  width: 80%;
  margin: 0 auto; */
}
}
</style>