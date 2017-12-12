<template lang="html">
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense color="cyan" class="white--text">
          <v-toolbar-title> Songs </v-toolbar-title>
        </v-toolbar>

      <div class="pl-4 pr-4 pb-2 pt-2"></div>
        <div class="error" v-html="error"/>
      </div>
    </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
