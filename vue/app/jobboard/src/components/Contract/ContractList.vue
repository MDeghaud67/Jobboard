<template>
<div class= 'ContractList'>
  <h1>List of Contract</h1>
  <b-button v-on:click="retrieveContracts">Display Contract</b-button>
    <b-list-group>
      <b-list-group-item  v-for= '(contract, index) in contract' :key= 'index'>
        <router-link :to="{ name: 'Company-details', params:{ contract: contract, id: contract._id }}">{{ contract.label }}</router-link>
      </b-list-group-item>
    </b-list-group>
    <router-view @refreshData="refreshList">refresh</router-view>
</div>
</template>
<script>
import http from '../../../http-common'

export default {
  name: 'ContractList',
  data () {
    return {
      contract: []
    }
  },

  methods: {
    retrieveContracts () {
      http.get('/contracts').then(response => {
        this.contract = response.data
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    refreshList () {
      this.retrieveContracts()
    },
    mounted () {
      this.retrieveContracts()
    }
  }
}
</script>

<style scoped>

</style>
