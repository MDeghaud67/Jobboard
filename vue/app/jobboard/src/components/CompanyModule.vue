<template>
<div class="company">
  <b-nav>
    <b-nav-item v-on:click="components='CompAdd'">Company Add</b-nav-item>
    <b-nav-item v-on:click="components='CompDell'">Company Delete</b-nav-item>
    <b-nav-item v-on:click="components='CompList'">Company list</b-nav-item>
    <b-nav-item v-on:click="components='CompOne'">Company find</b-nav-item>
    <b-nav-item v-on:click="components='CompUpdate'">Company Update</b-nav-item>
  </b-nav>
  <div class="container">
    <component v-bind:is="components"></component>
  </div>
</div>
</template>

<script>
import AddCompanies from '@/components/Company/CompanyAdd'
import CompanyDelete from '@/components/Company/CompanyDelete'
import CompanyList from '@/components/Company/CompanyList'
import CompanyUpdate from '@/components/Company/CompanyUpdate'
import CompanyOne from '@/components/Company/CompanyOne'
export default {
  name: 'CompanyModule',
  components: {
    CompAdd: AddCompanies,
    CompDell: CompanyDelete,
    CompList: CompanyList,
    CompOne: CompanyOne,
    CompUpdate: CompanyUpdate
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
