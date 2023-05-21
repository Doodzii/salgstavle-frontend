
<script lang="ts">

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login() {
      console.log(this.username);
      console.log(this.password);
    }
  }
}

</script>

<template>
  <div class="login form-container">
    <form @submit.prevent="login">
      
      <h1>🎯 Log ind</h1>

      <p>Vær opmærksom på, at dit login ikke er det samme som dit normale koncernlogin.</p>

      <div class="form-group">
        <label for="username">Brugernavn:</label>
        <input type="text" id="username" v-model="username" placeholder="m00000" required>
      </div>
      <div class="form-group">
        <label for="password">Adgangskode:</label>
        <input type="password" id="password" v-model="password" placeholder="**********" required>
      </div>
    
      <button type="submit">Log ind</button>
      <a style="margin-left: 10px;" href="/apply">Ansøg om leder adgang</a>
    </form>
  </div>
</template>



<style>
</style>
