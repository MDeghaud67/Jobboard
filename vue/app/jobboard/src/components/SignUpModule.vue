<template>
  <div class="SignUpModule">
    <b-container>
      <h1>Sign In</h1>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1 " label="email address" label-for="input-1">
          <b-form-input id="input-1" v-model="user.email" type="email" placeholder="Enter your email" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2 " label="First name" label-for="input-2">
          <b-form-input id="input-2" v-model="user.firstName" type="text" placeholder="Enter your first name" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3 " label="Last Name" label-for="input-3">
          <b-form-input id="input-3" v-model="user.lastName" type="text" placeholder="Enter your last name" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4 " label="Phone number" label-for="input-4">
          <b-form-input id="input-4" v-model="user.numTel" type="text" placeholder="Enter your phone number" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-5 " label="password" label-for="input-5">
          <b-form-input id="input-5" v-model="user.password" type="password" placeholder="Enter your password" required></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import http from '../../http-common'
export default {
  name: 'SignUpModule',
  data () {
    return {
      user: {
        lastName: '',
        firstName: '',
        telephone: '',
        email: '',
        password: ''
      },
      submitted: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.user))
      const data = {
        email: this.user.email,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        telephone: this.user.telephone,
        password: this.user.password
      }
      http.post('/user', data).then(response => {
        this.user._id = response.data.id
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
      http.post('/advertisement', data).then(response => {
      })
      this.submitted = true
    },
    onReset (evt) {
      evt.preventDefault()
      this.user = []
      this.submitted = false
    }
  }
}
</script>
