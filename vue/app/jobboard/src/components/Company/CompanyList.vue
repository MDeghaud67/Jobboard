<template>
<div class= 'companyList'>
  <h1>List of company</h1>
  <b-button v-on:click="retrieveCompanies">Display company</b-button>
    <b-list-group>
      <b-list-group-item  v-for= '(company, index) in company' :key= 'index'>
        <router-link :to="{ name: 'Company-details', params:{ company: company, id: company._id }}">{{ company.name }}</router-link>
      </b-list-group-item>
    </b-list-group>
    <router-view @refreshData="refreshList">refresh</router-view>
</div>
</template>
<script>
import http from '../../../http-common'

export default {
  name: 'CompanyList',
  data () {
    return {
      company: []
    }
  },

  methods: {
    retrieveCompanies () {
      http.get('/companies').then(response => {
        this.company = response.data
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    refreshList () {
      this.retrieveCompanies()
    },
    mounted () {
      this.retrieveCompanies()
    }
  }
}
</script>

<style scoped>

</style>
