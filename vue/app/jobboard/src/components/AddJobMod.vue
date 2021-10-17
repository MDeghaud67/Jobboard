<template>
  <div class="AddJob">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="job title" label-for="input-1">
        <b-form-input id="input-1" v-model="adv.title" type="text" required placeholder="enter a job title"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="description" label-for="input-2">
        <b-form-input id="input-2" v-model="adv.description" type="text" required placeholder="enter a description"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3">
        <b-form-checkbox-group v-model="adv.checked" id="input-3">
          <b-form-checkbox value="false">not on remote</b-form-checkbox>
          <b-form-checkbox value="true">on remote</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-form-group id="input-group-4" label="Companies" label-for="input-4">
        <b-form-select id="input-4" v-model="adv.companies" :options="companies"></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-5" label="ContractType" label-for="input-5">
        <b-form-select id="input-5" v-model="adv.contractType" :options="contractType"></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-6" label="location" label-for="input-6">
        <b-form-select id="input-5" v-model="adv.locationA" :options="locationA"></b-form-select>
        <b-form-select id="input-5" v-model="adv.locationB" :options="locationB"></b-form-select>
        <b-form-select id="input-5" v-model="adv.locationC" :options="locationC"></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-7" label="job" label-for="input-6">
        <b-form-select id="input-5" v-model="adv.jobA" :options="jobA"></b-form-select>
        <b-form-select id="input-5" v-model="adv.jobB" :options="jobB"></b-form-select>
        <b-form-select id="input-5" v-model="adv.jobC" :options="jobC"></b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  name: 'AddJobMod',
  data () {
    return {
      adv: {
        title: '',
        description: '',
        remote: false,
        createAt: Date.now(),
        checked: [],
        companies: '',
        contractType: [{}],
        locationC: [{}],
        jobC: [{}]
      },
      companies: [{}],
      contractType: [{}],
      locationA: [{}],
      locationB: [{}],
      locationC: [{}],
      jobA: [{}],
      jobB: [{}],
      jobC: [{}],
      showModal: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.adv))
    },
    onReset (evt) {
      evt.preventDefault()
      this.adv.title = ''
      this.adv.description = ''
      this.adv.remote = false
      this.adv.checked = []
      this.adv.companies = ''
      this.adv.contractType = [{}]
      this.adv.locationA = [{}]
      this.adv.locationB = [{}]
      this.adv.locationC = [{}]
      this.adv.jobA = [{}]
      this.adv.jobB = [{}]
      this.adv.jobC = [{}]
    }
  }
}

</script>

<style scoped>

</style>
