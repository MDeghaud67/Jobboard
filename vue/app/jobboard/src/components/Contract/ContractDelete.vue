<template>
  <div class="DellContract">
    <h1>Delete a Contract</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="ContractType name" label-for="input-1">
        <b-form-input id="input-1" v-model="contract.label" required placeholder="Enter ContractTyp to erase"></b-form-input>
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
      console.log(data)
      http.get('/contract/name/' + this.contract.label).then(response => {
        this.contract._id = response.data[0]._id
        console.log(response.data)
        http.delete('/contract/' + this.contract._id).then(response => {
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
