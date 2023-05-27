<script lang="ts">
import { useUserStore } from "../../stores/userData";

export default {
    id: "dashboard",
    
    mounted() {
        const user = useUserStore();

        console.log(user.loggedIn)

        return {
            user
        }
    }

}

</script>

<template>
    <div class="navbar">
        <p>Test!!!!</p>
    </div>
</template>

<style>

.navbar {
    background-color: red;
    display: flex;
    align-self: top;
    justify-self: left;
}

</style>