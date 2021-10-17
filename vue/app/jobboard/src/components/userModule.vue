<template>
  <div class="user">
    <b-nav>
      <b-nav-item v-on:click="components='UserDell'">User delete</b-nav-item>
      <b-nav-item v-on:click="components='UserList'">User list</b-nav-item>
      <b-nav-item v-on:click="components='UserOne'">User find</b-nav-item>
      <b-nav-item v-on:click="components='UserUpdate'">User update</b-nav-item>
    </b-nav>
    <div class="container">
      <component v-bind:is="components"></component>
    </div>
  </div>
</template>

<script>
import UserDelete from '@/components/user/UserDelete'
import UserList from '@/components/user/UserList'
import UserOne from '@/components/user/UserOne'
import UserUpdate from '@/components/user/UserUpdate'
export default {
  name: 'CompanyModule',
  components: {
    UserDell: UserDelete,
    UserList: UserList,
    UserOne: UserOne,
    UserUpdate: UserUpdate
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
