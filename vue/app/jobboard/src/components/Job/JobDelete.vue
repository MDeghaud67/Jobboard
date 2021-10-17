<template>
<div class="deleteJobs">
  <h1>Delete a job</h1>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-form-group id="input-group-1" label="Job title" label-for="input-1">
      <b-form-input id="input-1" v-model="job.title" required placeholder="Enter Job name to erase"></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</div>
</template>
<script>
import http from '../../../http-common'
export default {
  name: 'JobDelete',
  data () {
    return {
      job: {
        title: ''
      },
      submitted: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.job))
      const data = {
        name: this.job.title
      }
      console.log(data)
      http.get('/jobs/name/' + this.job.title).then(response => {
        this.job._id = response.data[0]._id
        console.log(response.data)
        http.delete('/job/' + this.job._id).then(response => {
          console.log(response.data)
          this.$emit('refreshData')
          this.$router.push('/')
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
      this.job = []
      this.submitted = false
    }
  }
}
</script>
<style scoped>

</style>
