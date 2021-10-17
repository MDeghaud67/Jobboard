<template>
<div class="UpdateJob">
  <h1>Search a job</h1>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-form-group id="input-group-1" label="Job name: " label-for="input-1">
      <b-form-input id="input-1" v-model="job.title" placeholder="Enter Job title to Display" required></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
  <div v-show="showState">
    <p>Job has been found for id: {{this.job._id}}</p>
    <b-list-group>
      <b-list-group-item v-for='(value, index) in job' :key='index'>
        {{ value }}
      </b-list-group-item>
    </b-list-group>
  </div>
</div>
</template>

<script>
import http from '../../../http-common'
let jobId = ''
export default {
  name: 'JobOne',
  data () {
    return {
      job: {
        title: '',
        job: []
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
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.job))
      http.get('/jobs/name/' + this.job.title).then(response => {
        this.job._id = response.data[0]._id
        jobId = this.job._id
        console.log(response.data)
        this.retrieveJob()
      }).catch(e => {
        console.log(e)
      })
      this.submitted = true
      this.setShowState()
    },
    retrieveJob () {
      http.get('/advertisement/' + this.job._id).then(response => {
        this.job = response.data
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
