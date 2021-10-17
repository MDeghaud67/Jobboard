<template>
  <div class="company">
    <b-nav>
      <b-nav-item v-on:click="components='ContractAdd'">Contract Add</b-nav-item>
      <b-nav-item v-on:click="components='ContractDell'">Contract Delete</b-nav-item>
      <b-nav-item v-on:click="components='ContractList'">Contract list</b-nav-item>
      <b-nav-item v-on:click="components='ContractOne'">Contract find</b-nav-item>
      <b-nav-item v-on:click="components='ContractUpdate'">Company Update</b-nav-item>
    </b-nav>
    <div class="container">
      <component v-bind:is="components"></component>
    </div>
  </div>
</template>

<script>
import ContractAdd from '@/components/Contract/ContractAdd'
import ContractDelete from '@/components/Contract/ContractDelete'
import ContractList from '@/components/Contract/ContractList'
import ContractOne from '@/components/Contract/ContractOne'
import ContractUpdate from '@/components/Contract/ContractUpdate'
export default {
  name: 'ContractModule',
  components: {
    ContractAdd: ContractAdd,
    ContractDell: ContractDelete,
    ContractList: ContractList,
    ContractOne: ContractOne,
    ContractUpdate: ContractUpdate
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
