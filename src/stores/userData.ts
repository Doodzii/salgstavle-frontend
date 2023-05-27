import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import {useToast} from 'vue-toast-notification';
import router from "../router"
import axios from "axios";
import config from "../config";

export const useUserStore = defineStore({
  id: "user",

  state: () => ({
    loggedIn: null,
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
        router.push("/dashboard")
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
      
      //Session valid
      if (res.data.success) {
        this.loggedIn = true;
        this.data = res.data.userdata;
        console.log(`Currently logged in as ${this.data.username}`)
      }

      //Session invalid
      else {
        this.loggedIn = false;
        this.data = {};
        console.log(`Not logged in.`)
      }
    },

    //Logout of current account
    logout() {
      console.log("logout!");
    }

  }
})
