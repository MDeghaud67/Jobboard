<template>
  <div class="AddContractType">
    <h1>Add a new type of ContractType</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="contractType name" label-for="input-1">
        <b-form-input id="input-1" v-model="contract.label" required placeholder="Enter a contractType label"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
import http from '../../../http-common'
export default {
  name: 'AddContract',
  data () {
    return {
      contract: {
        label: ''
      },
      submitted: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.contract))
      const data = {
        label: this.contract.label
      }
      http.post('/contract', data).then(response => {
        this.contract._id = response.data.id
        console.log(response.data)
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
