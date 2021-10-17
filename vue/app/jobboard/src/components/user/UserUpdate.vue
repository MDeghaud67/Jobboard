<template>
  <div class="UpdateUser">
    <h1>Update a User details</h1>
    <b-form @submit="onSubmitA" @reset="onReset">
      <b-form-group id="input-group-1" label="User email" label-for="input-1">
        <b-form-input id="input-1" v-model="user.email" required placeholder="Enter contract user email to update"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-form @submit="onSubmitB" @reset="onReset" v-show="showState">
      <p>Contract has been found for id: {{this.user._id}} </p>
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
  </div>
</template>

<script>
import http from '../../../http-common'

let userId = ''

export default {
  name: 'CompanyUpdate',

  data () {
    return {
      user: {
        lastName: '',
        firstName: '',
        telephone: '',
        email: '',
        password: ''
      },
      submitted: false,
      showState: false,
      userId
    }
  },
  methods: {
    setShowState: function () {
      this.showState = true
    },
    onSubmitA (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.user))
      console.log(this.user.email)
      http.get('/user/email/' + this.user.email).then(response => {
        this.user._id = response.data[0]._id
        userId = this.user._id
        this.setShowState()
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
      this.submitted = true
    },
    onSubmitB (evt) {
      this.showState = false
      evt.preventDefault()
      alert(JSON.stringify(this.contract))
      const data = {
        email: this.user.email,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        telephone: this.user.telephone,
        password: this.user.password
      }
      console.log(this.user._id)
      http.put('/user/' + this.user._id, data).then(response => {
        this.user.active = response.data.active
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    onReset (evt) {
      evt.preventDefault()
      this.contract = []
      this.submitted = false
    }
  }
}
</script>

<style scoped>

</style>
