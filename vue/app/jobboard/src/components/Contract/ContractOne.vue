<template>
  <div class="UpdateContract">
    <h1>Search a ContractType</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Contract name: " label-for="input-1">
        <b-form-input id="input-1" v-model="contract.label" placeholder="Enter a contractType to search" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <div v-show="showState">
      <p>Contract has been found for id: {{this.contract._id}}</p>
      <b-list-group>
        <b-list-group-item  v-for= '(value, index) in contract' :key= 'index'>
        {{ value }}
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import http from '../../../http-common'
let contractId = ''
export default {
  name: 'ContractUpdate',
  data () {
    return {
      contract: {
        id: '',
        contract: []
      },
      submitted: false,
      showState: false,
      contractId
    }
  },
  methods: {
    setShowState: function () {
      this.showState = true
    },
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.contract))
      http.get('/contract/name/' + this.contract.label).then(response => {
        this.contract._id = response.data[0]._id
        contractId = this.contract._id
        console.log(response.data)
        this.retrieveCompany()
      }).catch(e => {
        console.log(e)
      })
      this.submitted = true
      this.setShowState()
    },
    retrieveCompany () {
      http.get('/contract/' + this.contract._id).then(response => {
        this.contract = response.data
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
