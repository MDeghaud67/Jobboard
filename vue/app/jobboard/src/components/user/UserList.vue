<template>
<div class= 'ContractList'>
  <h1>List of user</h1>
  <b-button v-on:click="retrieveContracts">Display user</b-button>
    <b-list-group>
      <b-list-group-item  v-for= '(user, index) in user' :key= 'index'>
        <router-link :to="{ name: 'user-detail', params:{ user: user, id: user._id }}">{{ user.email }}</router-link>
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
      user: []
    }
  },

  methods: {
    retrieveContracts () {
      http.get('/user').then(response => {
        this.user = response.data
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
