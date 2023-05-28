<script lang="ts">
import { useUserStore } from "../../stores/userData";
import { ref } from 'vue'

export default {
    id: "dashboard",

    setup() {
        const user = useUserStore();
        const showAccountSettings = ref(false);

        const toggleAccountSettings = () => {
            showAccountSettings.value = !showAccountSettings.value;
        }

        const logout = () => {
            user.logout();
        }

        return {
            user,
            showAccountSettings,
            toggleAccountSettings,
            logout
        }
    }

}

</script>

<template>
    <div class="navbar">
        <div class="logo-section">
            <img class="logo non-selectable" src="../../assets/logo.png">
        </div>
        <div class="user-section">
            <p class="username non-selectable">{{ (user as any).data.username }}</p>
            <i class="fa-sharp fa-solid fa-gear settings-icon" @click="toggleAccountSettings"></i>
        </div>
        <div class="popup" v-if="showAccountSettings">
            
            <button class="logout-button" @click="logout">
                <i class="fa-solid fa-right-from-bracket"></i> Log ud
            </button>

        </div>
    </div>
</template>

<style>

.navbar {
    background-color: #ae6e69;
    display: flex;
    align-self: top;
    height: 70px;
    flex-direction: row;
}

.popup {
  position: absolute;
  top: 70px;
  right: 0;
  background-color: #ae6e69;
  padding: 20px;
  width: 100px;
  border-bottom-left-radius: 30px;
}

.popup > button {
    background: none;
    border: none;
    font-size: 20px;
    color: white;
    cursor: pointer;
}
.popup > button:hover {
    color: rgb(222, 222, 222);
}

.logo {
    width: 50px;
    height: 50px;
    padding: 10px;
}

.user-section {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.settings-icon {
    margin: 0;
    font-size: 30px;
    color: white;
    margin-right: 20px;
    cursor: pointer;
    transition-duration: 0.5s;
}
.settings-icon:hover {
    color: rgb(222, 222, 222);
    rotate: 45deg;
}

.username {
    color: white;
    font-size: 25px;
    margin: 0;
    padding: 20px;
}

</style>