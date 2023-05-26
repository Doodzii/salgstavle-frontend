<script lang="ts">
import { RouterView } from 'vue-router'
import { useUserStore } from "./stores/userData";

export default {

  setup() {
    const user = useUserStore();

    if (!user.loggedIn) {
      user.checkSession();
    }

    return {
      user
    }
    
  }
}

</script>

<template>
  <RouterView />
</template>