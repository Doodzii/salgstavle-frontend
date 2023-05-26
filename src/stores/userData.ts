import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import {useToast} from 'vue-toast-notification';
import App from "../App.vue"

import axios from "axios";
import config from "../config";

export const useUserStore = defineStore({
  id: "user",

  state: () => ({
    loggedIn: false,
    data: null
  }),

  actions: {

    //Brand new login
    async login(username: string, password: string, instance: any) {

      const response = await axios.post(config.backendUrl+"/login", {
        username: username,
        password: password
      })

      if (response.data.success) {
        instance.$toast.success(response.data.success);
        $cookies.set("session", response.data.session, "10080")
        this.checkSession();
      }

      if (response.data.error) {
        instance.$toast.error(response.data.error);
      }

    },

    //Check the session token saved as cookie
    async checkSession() {

      let token = $cookies.get("session");
      if (!token) return;

      const res = await axios.post(config.backendUrl+"/getsession", {
          token: token
      })

      this.loggedIn = true;
      this.data = res.data.userdata;
      console.log(`Currently logged in as ${this.data.username}`)
    },

    //Logout of current account
    logout() {
      console.log("logout!");
    }

  }
})
