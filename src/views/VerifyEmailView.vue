<script lang="ts">
import axios from "axios";
import config from "../config";
import { runInThisContext } from "vm";

export default {
  name: "verify",
  data() {
    return {
      code: "",
      success: false,
      loading: true
    }
  },
  methods: {},

  async created() {


    this.code = (this.$route.query.code) as string;
    if (!this.code) return;
    
    const response = await axios.post(config.backendUrl+"/verify", {
      code: this.code,
    });


    if (response.data.error) {
      this.$toast.error(response.data.error);
      this.success = false;
    }

    if (response.data.success) {
      this.$toast.success(response.data.success);
      this.success = true;
    }

    this.loading = false;
  }

}
</script>

<template>

  <main>
    <div v-if="loading">
        <div class="loading-spinner"></div>
    </div>

    <div v-if="!loading && success">
        <h1>Fuldført!</h1>
        <p>Din email er nu blevet verificeret!</p>
    </div>
    
    <div v-if="!loading && !success">
        <h1>Fejl!</h1>
        <p>Enten er linket ugyldigt eller udløbet!</p>
    </div>

  </main>
  
</template>

<style>
</style>