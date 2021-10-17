<template>
  <div class="DellContract">
    <h1>Delete a Contract</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Company name" label-for="input-1">
        <b-form-input id="input-1" v-model="company.name" required placeholder="Enter Company name to erase"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import http from '../../../http-common'
export default {
  name: 'CompanyDelete',
  data () {
    return {
      company: {
        name: ''
      },
      submitted: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.company))
      const data = {
        name: this.company.name
      }
      console.log(data)
      http.get('/companies/name/' + this.company.name).then(response => {
        this.company._id = response.data[0]._id
        console.log(response.data)
        http.delete('/company/' + this.company._id).then(response => {
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
      this.company = []
      this.submitted = false
    }
  }
}
</script>

<style scoped>

</style>
