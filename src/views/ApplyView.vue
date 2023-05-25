<script lang="ts">
import axios from "axios";
import config from "../config";

import "../assets/forms.css";

export default {
  name: "apply",
  data() {
    return {
      email: "",
      provider: "",
      team: "",
      reason: "",
      sent: false
    }
  },
  methods: {
    async apply() {
      
      const response = await axios.post(config.backendUrl+"/apply", {
        email: this.email,
        provider: this.provider,
        team: this.team,
      })
      
      if (response.data.success) {
        this.$toast.success(response.data.success);
        this.sent = true;
      }

      if (response.data.error) {
        this.$toast.error(response.data.error);
      }

      //Clear up inputs. Send notification.
      /*if (response.data.clear) {
        this.email = "";
        this.provider = "";
        this.team = "";
      }
      */
    }
  }
}
</script>

<template>
    <!-- 
      Application form
    -->
    <div v-if="!sent" class="apply form-container">

        <h1>🎯 Ansøgningsformular - Leder Adgang</h1>

        <p>Når du ansøger om adgang og bliver godkendt, vil du modtage en e-mail med en engangskode til login.</p>
        <p>Vær opmærksom på, at godkendelsesprocessen er manuel, og det kan derfor tage længere tid.</p>

        <form class="apply-form" @submit.prevent="apply">
            
            <div class="form-group">
                <label for="username">Arbejdsmail:</label>
                <input type="email" id="email" v-model="email" placeholder="test@yousee.dk" required>
            </div>
 
            <div class="form-group">
                <label for="text">Udbyder:</label>
                <input type="text" id="provider" v-model="provider" placeholder="YouSee" required>
            </div>

            <div class="form-group">
                <label for="text">Team:</label>
                <input type="text" id="teamname" v-model="team" placeholder="YKCS0" required>
            </div>
            
            <div class="form-group">
                <label for="text">Venligst uddyb årsagen til, hvorfor du søger adgang:</label>
                <!-- <input type="text" id="reason" v-model="reason" placeholder="Så jeg kan motivere mit team til at sælge nødpakker!" required>-->
                <textarea id="reason" name="reason" placeholder="Så jeg kan motivere mit team til at sælge nødpakker!" required></textarea>
            
            </div>

  
            <button type="submit">Ansøg</button>
            <a style="margin-left: 10px;" href="/login">Gå til login</a>
        </form>
    </div>
    
    <!--
      Application sent. Check email inbox.
    -->
    <div v-if="sent" class="apply form-container">
      <h1>Godkend din email</h1>
      <p>Følg instruktionerne sendt til din mailadresse på <b>{{ email }}</b>.</p>
      <a style="margin-left: 10px;" href="/login">Gå til login</a>
    </div>

</template>

<style>
</style>