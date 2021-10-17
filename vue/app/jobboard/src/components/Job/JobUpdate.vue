<template>
<div class="UpdateJob">
  <h1>Update a job details</h1>
  <b-form @submit="onSubmitA" @reset="onReset">
    <b-form-group id="input-group-1" label="Job name" label-for="input-1">
      <b-form-input id="input-1" v-model="job.title" required placeholder="Enter Job name to update"></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
  <b-form @submit="onSubmitB" @reset="onReset" v-show="showState">
    <p>Job has been found for id: {{this.job._id}} </p>
    <b-form-group id="input-group-2" label="Job name" label-for="input-2">
      <b-form-input id="input-2" v-model="job.title" required placeholder="Enter Job name"></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-3" label="Job description" label-for="input-3">
      <b-form-input id="input-3" v-model="job.description" required placeholder="Enter a description"></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</div>
</template>

<script>
import http from '../../../http-common'
let jobId = ''
export default {
  name: 'JobUpdate',
  data () {
    return {
      job: {
        title: '',
        description: ''
      },
      submitted: false,
      showState: false,
      jobId
    }
  },
  methods: {
    setShowState: function () {
      this.showState = true
    },
    onSubmitA (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.job))
      http.get('/companies/name/' + this.job.title).then(response => {
        this.job._id = response.data[0]._id
        jobId = this.job._id
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
      alert(JSON.stringify(this.job))
      const data = {
        name: this.job.title,
        description: this.job.description
      }
      console.log(this.job._id)
      http.put('/job/' + this.job._id, data).then(response => {
        this.job.active = response.data.active
        console.log(response.data)
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
