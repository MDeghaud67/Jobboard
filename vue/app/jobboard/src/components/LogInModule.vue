<template>
<div class="LogInModule">
  <b-form @submit="onSubmit">
   <b-form-group id="input-group-1" label="User mail" label-for="input-1">
     <b-form-input id="input-1" v-model="user.email" type="email" placeholder="Enter your user mail" required></b-form-input>
   </b-form-group>
    <b-form-group id="input-group-2" label="User mail" label-for="input-2">
      <b-form-input id="input-2" v-model="user.password" type="password" placeholder="Enter your password" required></b-form-input>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form-group>
  </b-form>
</div>
</template>

<script>
import http from '../../http-common'
export default {
  name: 'LogInModule',
  data () {
    return {
      user: {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      },
      rPassword: '',
      submitted: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.user))
      http.get('/user/email/' + this.user.email).then(response => {
        this.rPassword = response.data[0].password
        if (this.rPassword === this.user.password) {
          console.log('true')
          this.user._id = response.data[0]._id
          this.user.firstName = response.data[0].firstName
          this.user.lasetName = response.data[0].lastName
          localStorage.user = this.user._id
          localStorage.username = this.user.firstName + this.user.lastName
        }
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
      this.submitted = true
    }
  }
}
</script>

<style scoped>

</style>
