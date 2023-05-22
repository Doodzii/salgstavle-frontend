<script lang="ts">
import axios from "axios";
import config from "../config";

import "../assets/forms.css"


export default {
  name: "apply",
  data() {
    return {
      email: "",
      provider: "",
      team: ""
    }
  },
  methods: {
    async apply() {
      
      const response = await axios.post(config.backendUrl+"/apply", {
        email: this.email,
        provider: this.provider,
        team: this.team
      })


      //Clear up inputs. Send notification.
      this.email = "";
      this.provider = "";
      this.team = "";
      this.$toast.success("Din ansøgning er blevet sendt!");
    }
  }
}
</script>

<template>
    <div class="apply form-container">

        <h1>🎯 Ansøgningsformular - Leder Adgang</h1>

        <p>Når du ansøger om adgang og bliver godkendt, vil du modtage en e-mail med en engangskode til login.</p>
        <p>Vær opmærksom på, at godkendelsesprocessen er manuel, og det kan derfor tage længere tid.</p>

        <form class="apply-form" @submit.prevent="apply">
            
            <div class="form-group">
                <label for="username">Arbejdsmail:</label>
                <input type="email" id="email" v-model="email" placeholder="test@yousee.dk" required>
            </div>
 
            <div class="form-group">
                <label for="password">Udbyder:</label>
                <input type="text" id="provider" v-model="provider" placeholder="YouSee" required>
            </div>

            <div class="form-group">
                <label for="password">Team:</label>
                <input type="text" id="teamname" v-model="team" placeholder="YKCS0" required>
            </div>
            
            <button type="submit">Ansøg</button>
            <a style="margin-left: 10px;" href="/login">Gå til login</a>
        </form>
    </div>
</template>

<style>
</style>