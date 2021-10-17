<template>
<div class="jobList">
  <h1>List of job</h1>
  <b-button v-on:click="retrieveJobs">Display job</b-button>
    <b-list-group>
      <b-list-group-item  v-for= '(job, index) in job' :key= 'index'>
        <router-link :to="{ title: 'Company-details', params:{ job: job, id: job._id }}">{{ job.title }}</router-link>
      </b-list-group-item>
    </b-list-group>
    <router-view @refreshData="refreshList">refresh</router-view>
  </div>
</template>
<script>
import http from '../../../http-common'

export default {
  name: 'JobList',
  data () {
    return {
      job: []
    }
  },

  methods: {
    retrieveJobs () {
      http.get('/advertisements').then(response => {
        this.job = response.data
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    refreshList () {
      this.retrieveJobs()
    },
    mounted () {
      this.retrieveJobs()
    }
  }
}
</script>
<style scoped>

</style>
