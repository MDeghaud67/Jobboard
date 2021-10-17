<template>
  <div class="UpdateContract">
    <h1>Update a ContractType details</h1>
    <b-form @submit="onSubmitA" @reset="onReset">
      <b-form-group id="input-group-1" label="contract name" label-for="input-1">
        <b-form-input id="input-1" v-model="contract.label" required placeholder="Enter contract name to update"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-form @submit="onSubmitB" @reset="onReset" v-show="showState">
      <p>Contract has been found for id: {{this.contract._id}} </p>
      <b-form-group id="input-group-2" label="contract name" label-for="input-2">
        <b-form-input id="input-2" v-model="contract.label" required placeholder="Enter contract name"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import http from '../../../http-common'

let contractId = ''

export default {
  name: 'CompanyUpdate',

  data () {
    return {
      contract: {
        label: ''
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
    onSubmitA (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.contract))
      console.log(this.contract.label)
      http.get('/contract/name/' + this.contract.label).then(response => {
        this.contract._id = response.data[0]._id
        contractId = this.contract._id
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
        label: this.contract.label
      }
      console.log(this.contract._id)
      http.put('/contract/' + this.contract._id, data).then(response => {
        this.contract.active = response.data.active
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
