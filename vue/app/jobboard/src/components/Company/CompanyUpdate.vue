<template>
  <div class="UpdateCompany">
    <h1>Update a company details</h1>
    <b-form @submit="onSubmitA" @reset="onReset">
      <b-form-group id="input-group-1" label="Company name" label-for="input-1">
        <b-form-input id="input-1" v-model="company.name" required placeholder="Enter Company name to update"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-form @submit="onSubmitB" @reset="onReset" v-show="showState">
      <p>Company has been found for id: {{this.company._id}} </p>
      <b-form-group id="input-group-2" label="Company name" label-for="input-2">
        <b-form-input id="input-2" v-model="company.name" required placeholder="Enter Company name"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Company description" label-for="input-3">
        <b-form-input id="input-3" v-model="company.description" required placeholder="Enter a description"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
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
        description: ''
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
    onSubmitA (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.company))
      http.get('/companies/name/' + this.company.name).then(response => {
        this.company._id = response.data[0]._id
        companyId = this.company._id
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
      this.submitted = true
      this.setShowState()
    },
    onSubmitB (evt) {
      this.showState = false
      evt.preventDefault()
      alert(JSON.stringify(this.company))
      const data = {
        name: this.company.name,
        description: this.company.description
      }
      console.log(this.company._id)
      http.put('/company/' + this.company._id, data).then(response => {
        this.company.active = response.data.active
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
