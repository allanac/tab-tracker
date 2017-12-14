<template>
  <v-layout column>
    <v-flex xs4 offset-xs4>
      <panel title="Login">
        <v-text-field
          label="Email"
          type="email"
          v-model="email">
        </v-text-field>

        <br>

        <v-text-field
          label="Password"
          type ="password"
          v-model ="password">
        </v-text-field>

        <br>

        <div class="error" v-html="error"/>

        <br>

        <v-btn
          color="cyan"
          class="white--text"
          @click="login"> Login
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  import Panel from '@/components/Panel'
  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login () {
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (error) {
          //        -------             our variable defined
          // --------- [ dta rtrnd frm axios] |
          this.error = error.response.data.error
        }
      }
    },
    components: {
      Panel
    }
  }
</script>

<style scoped>
.error {
  color: red;
}
</style>
