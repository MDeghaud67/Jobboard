<template>
<div class="job">
  <b-nav>
    <b-nav-item v-on:click="components='JobAdd'">Job Add</b-nav-item>
    <b-nav-item v-on:click="components='JobDell'">Job Delete</b-nav-item>
    <b-nav-item v-on:click="components='JobList'">Job list</b-nav-item>
    <b-nav-item v-on:click="components='JobOne'">Job One</b-nav-item>
    <b-nav-item v-on:click="components='JobUpdate'">Job Update</b-nav-item>
  </b-nav>
  <div class="container">
    <component v-bind:is="components"></component>
  </div>
</div>
</template>

<script>
import AddJobs from '@/components/Job/JobAdd'
import JobDelete from '@/components/Job/JobDelete'
import JobList from '@/components/Job/JobList'
import JobOne from '@/components/Job/JobOne'
import JobUpdate from '@/components/Job/JobUpdate'

export default {
  name: 'JobModule',
  components: {
    JobAdd: AddJobs,
    JobDell: JobDelete,
    JobList: JobList,
    JobOne: JobOne,
    JobUpdate: JobUpdate
  },
  data () {
    return {
      components: this.components
    }
  }
}
</script>

<style scoped>

</style>
