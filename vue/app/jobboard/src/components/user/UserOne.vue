<template>
  <div class="UserOne">
    <h1>Search a User</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="user email: " label-for="input-1">
        <b-form-input id="input-1" v-model="user.email" placeholder="Enter a email user to search" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <div v-show="showState">
      <p>User has been found for id: {{this.user._id}}</p>
      <b-list-group>
        <b-list-group-item  v-for= '(value, index) in user' :key= 'index'>
        {{ value }}
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import http from '../../../http-common'
let userId = ''
export default {
  name: 'ContractUpdate',
  data () {
    return {
      user: {
        id: '',
        user: []
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
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.user))
      http.get('/user/email/' + this.user.email).then(response => {
        this.user._id = response.data[0]._id
        userId = this.user._id
        console.log(response.data)
        this.retrieveUser()
        this.setShowState()
      }).catch(e => {
        console.log(e)
      })
      this.submitted = true
    },
    retrieveUser () {
      http.get('/user/' + this.user._id).then(response => {
        this.user = response.data
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
