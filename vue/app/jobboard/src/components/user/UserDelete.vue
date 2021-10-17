<template>
  <div class="DellUser">
    <h1>Delete a User</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Email user" label-for="input-1">
        <b-form-input id="input-1" v-model="user.email" type="email" placeholder="Enter a valid email to delete" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import http from '../../../http-common'
export default {
  name: 'ContractDelete',
  data () {
    return {
      user: {
        email: ''
      },
      submitted: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.user))
      const data = {
        email: this.user.email
      }
      console.log(data)
      http.get('/user/email/' + this.user.email).then(response => {
        console.log(response)
        this.user._id = response.data[0]._id
        console.log(response.data)
        http.delete('/user/' + this.user._id).then(response => {
          console.log(response.data)
          this.$emit('refreshData')
        }).catch(e => {
          console.log(e)
        })
      }).catch(e => {
        console.log(e)
      })

      this.submitted = true
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
