<template>
  <div class="AddCompanies">
    <h1>Add a new company</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Company name" label-for="input-1">
        <b-form-input id="input-1" v-model="company.name" required placeholder="Enter Company name"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Company description" label-for="input-2">
        <b-form-input id="input-2" v-model="company.description" required placeholder="Enter a description"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>

</template>

<script>
import http from '../../../http-common'
export default {
  name: 'AddCompanies',
  data () {
    return {
      company: {
        name: '',
        description: ''
      },
      submitted: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.company))
      const data = {
        name: this.company.name,
        description: this.company.description
      }
      http.post('/company', data).then(response => {
        this.company._id = response.data.id
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
      this.submitted = true
    },
    onReset (evt) {
      evt.preventDefault()
      this.company = []
      this.submitted = false
    }
  }
}
</script>

<style scoped>

</style>
