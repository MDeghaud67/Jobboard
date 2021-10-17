<template>
  <b-container fluid="" class="dashBoard">
    <b-row >
    <b-col>
    <b-nav vertical>
      <b-nav-item v-on:click="components='Contract'">Contract</b-nav-item>
      <b-nav-item v-on:click="components='Company'">Company</b-nav-item>
      <b-nav-item v-on:click="components='Job'">Job</b-nav-item>
      <b-nav-item v-on:click="components='User'">User</b-nav-item>
      <b-nav-item v-on:click="components='UserApply'">User Apply</b-nav-item>
    </b-nav>
    </b-col>
    <b-col cols = 10>
      <component v-bind:is="components"></component>
    </b-col>
    </b-row>
  </b-container>
</template>
<script>
import AddJobMod from '@/components/AddJobMod'
import CompanyModule from '@/components/CompanyModule'
import JobModule from '@/components/JobModule'
import ContractModule from '@/components/ContractModule'
import userModule from '@/components/userModule'
export default {
  name: 'DashBoard',
  components: {
    AddJob: AddJobMod,
    Company: CompanyModule,
    Contract: ContractModule,
    Job: JobModule,
    User: userModule
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
