<template>
  <b-container fluid="xl">
    <div class="entry">
    <b-row class="justify-content-center">
        <b-button v-on:click="components='logIn'">Log In</b-button>
      <p>or</p>
        <b-button v-on:click="components='signUp'">Sign In</b-button>
    </b-row>
    <b-row class="justify-content-center">
      <component v-bind:is="components"></component>
    </b-row>
    </div>
  </b-container>
</template>
<script>
import LogInModule from '@/components/LogInModule'
import SignUpModule from '@/components/SignUpModule'

export default {
  name: 'Form',
  components: {
    logIn: LogInModule,
    signUp: SignUpModule
  },
  data () {
    return {
      components: this.components
    }
  }
}
</script>
<style>
.entry{
  margin-top: 7%;
}
</style>
