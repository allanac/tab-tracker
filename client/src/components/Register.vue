<template>
  <v-layout column>
    <v-flex xs4 offset-xs4>
      <div class="white elevation-2">
        <v-toolbar flat dense color="cyan" class="white--text">
          <v-toolbar-title> Register </v-toolbar-title>
        </v-toolbar>

      <div class="pl-4 pr-4 pb-2 pt-2">
        <v-text-field
          label ="Email"
          v-model="email"
          placeholder="email">
        </v-text-field>

        <br>

        <v-text-field
          label="Password"
          v-model ="password"
          placeholder="password">
        </v-text-field>

        <br>

        <div class="error" v-html="error"/>

        <br>

        <v-btn
          color="cyan"
          class="white--text"
          @click="register"> Register
        </v-btn>
      </div>
    </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async register () {
        try {
          await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
        } catch (error) {
          //        -------                  our variable defined
          // --------- [ dta rtrnd frm axios] |
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<style scoped>
.error {
  color: red;
}
</style>
