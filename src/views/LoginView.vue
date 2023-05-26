
<script lang="ts">
import axios from "axios";
import config from "../config";

import { useUserStore } from "../stores/userData";

export default {
  name: "login",
  
  setup() {
    const user = useUserStore();

    return {
      user
    }
  },

  data() {
    return {
      username: "",
      password: ""
    }
  },

  methods: {
    async login() {

      this.user.login(this.username, this.password, this);

      /*
      const response = await axios.post(config.backendUrl+"/login", {
        username: this.username,
        password: this.password
      })

      console.log(response.data.session);

      if (response.data.success) {
        this.$toast.success(response.data.success);
        this.$cookies.set("session", response.data.session, "10080")
      }

      if (response.data.error) {
        this.$toast.error(response.data.error);
      }*/

    }
  }

}

</script>

<template>
  <div class="login form-container">
    <form @submit.prevent="login">
      
      <h1>🎯 Log ind</h1>

      <p>Vær opmærksom på, at dit login ikke er det samme som dit normale koncernlogin.</p>
      <p>Hvis du ikke kender dine loginoplysninger, bedes du kontakte din leder for hjælp.</p>
      <div class="form-group">
        <label for="username">Brugernavn</label>
        <input type="text" autocomplete="username" v-model="username" placeholder="test@yousee.dk" required>
      </div>
      <div class="form-group">
        <label for="password">Adgangskode</label>
        <input type="password" autocomplete="current-password" v-model="password" placeholder="**********" required>
      </div>
    
      <button type="submit">Log ind</button>
      <a style="margin-left: 10px;" href="/apply">Ansøg om leder adgang</a>
    </form>
  </div>
</template>

<style>
</style>
