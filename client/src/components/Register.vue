<template>
  <v-layout column>
    <v-flex xs4 offset-xs4>
      <panel title ="Register">
        <form name="tab-tracker-form"
              autocomplete="off">

          <v-text-field
            label ="Email"
            v-model="email"
            placeholder="email">
          </v-text-field>

          <br>

          <v-text-field
            label="Password"
            type="password"
            v-model ="password"
            autocomplete="new-password"
            placeholder="password">
          </v-text-field>
        </form>
        <br>

        <div class="error" v-html="error"/>

        <br>

        <v-btn
          color="cyan"
          class="white--text"
          @click="register"> Register
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
      async register () {
        try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (error) {
          //        -------                  our variable defined
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
