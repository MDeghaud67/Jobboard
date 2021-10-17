<template>
<div class="addJobs">
  <b-form @submit="onSubmit" @reset="onReset">
    <b-form-group id="input-group-1" label="Job title" label-for="input-1">
      <b-form-input id="input-1" v-model="job.title" required placeholder="Enter Job name"></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="Job description" label-for="input-2">
      <b-form-input id="input-2" v-model="job.description" required placeholder="Enter a description"></b-form-input>
    </b-form-group>
    <b-form-group id="select-group-3" label="Job remote" label-for="select-3">
      <b-form-radio v-model="job.remote1" name="some-radios" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="job.remote2" name="some-radios" value="No" required>No</b-form-radio>
    </b-form-group>
    <b-form-group id="input-group-4" label="Job location" label-for="input-4">
      <b-form-input id="input-4" v-model="job.location" required placeholder="Enter a location"></b-form-input>
    </b-form-group>
    <div class="input-group mb-5">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary" type="button" v-on:click="retrieveCompanies">Job company</button>
      </div>
      <select class="custom-select" id="inputGroupSelect05" placeholder="Choose the company" v-model="job.companyId">
        <option v-for='(name, index) in company' :key='index' :value='name.value'>{{name.value}}</option>
      </select>
    </div>
    <div class="input-group mb-6">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary" type="button" v-on:click="retrieveContracts">Job contract</button>
      </div>
      <select class="custom-select" id="inputGroupSelect06" placeholder="Choose the contract" v-model="job.contractId">
        <option v-for='(label, index) in contract' :key='index' :value='label.value'>{{label.value}}</option>
      </select>
    </div>
    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</div>
<!--<b-list-group>
  <b-list-group-item v-for='(value, index) in company' :key='index'>
    {{ value }}
  </b-list-group-item>
</b-list-group>-->
</template>
<script>
import http from '../../../http-common'
export default {
  name: 'addJobs',
  data () {
    return {
      job: {
        title: '',
        description: '',
        remote1: true,
        remote2: false,
        location: '',
        companyId: '',
        contractId: ''
      },
      company: [],
      contract: [],
      submitted: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.job))
      const data = {
        title: this.job.title,
        description: this.job.description,
        remote: this.job.remote,
        location: this.job.location,
        company: this.job.companyId,
        contract: this.job.contractId
      }
      /* http.get('/company' + this.job.companyId)(response => {
        this.company.name = response.data.name
        console.log(response.data)
        this.retrieveCompanies()
      }).catch(e => {
        console.log(e)
      })
      http.get('/contract' + this.job.companyId)(response => {
        this.contract.label = response.data.label
        console.log(response.data)
        this.retrieveContracts()
      }).catch(e => {
        console.log(e)
      }) */
      http.post('/advertisement', data).then(response => {
        this.job._id = response.data.id
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
      this.submitted = true
    },
    confRemote () {
      if (this.job.remote === 'Yes') {
        return true
      } else if (this.job.remote === 'No') {
        return false
      }
    },
    retrieveCompanies () {
      http.get('/companies').then(response => {
        response.data.forEach(d => {
          this.company.push({ key: d._companiesId, value: d.name })
        })
        console.log(this.company)
      }).catch(e => {
        console.log(e)
      })
    },
    retrieveContracts () {
      http.get('/contracts').then(response => {
        response.data.forEach(d => {
          this.contract.push({ key: d._contractTypeId, value: d.label })
        })
        console.log(this.contract)
      }).catch(e => {
        console.log(e)
      })
    },
    onReset (evt) {
      evt.preventDefault()
      this.job = []
      this.submitted = false
    }
  }
}
</script>
<style scoped>

</style>
