<template>
  <div class="UpdateCompany">
    <h1>Search a company</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Company name: " label-for="input-1">
        <b-form-input id="input-1" v-model="company.name" placeholder="Enter Company name to search" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <div v-show="showState">
      <p>Company has been found for id: {{this.company._id}}</p>
      <b-list-group>
        <b-list-group-item  v-for= '(value, index) in company' :key= 'index'>
        {{ value }}
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import http from '../../../http-common'
let companyId = ''
export default {
  name: 'CompanyUpdate',
  data () {
    return {
      company: {
        name: '',
        company: []
      },
      submitted: false,
      showState: false,
      companyId
    }
  },
  methods: {
    setShowState: function () {
      this.showState = true
    },
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.company))
      http.get('/companies/name/' + this.company.name).then(response => {
        this.company._id = response.data[0]._id
        companyId = this.company._id
        console.log(response.data)
        this.retrieveCompany()
      }).catch(e => {
        console.log(e)
      })
      this.submitted = true
      this.setShowState()
    },
    retrieveCompany () {
      http.get('/company/' + this.company._id).then(response => {
        this.company = response.data
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
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
