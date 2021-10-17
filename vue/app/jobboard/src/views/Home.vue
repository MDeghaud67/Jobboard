<template>
  <div class="home">
      <b-row class="intro">
        <b-container>
      <p>Bienvenue sur notre site d'offre d'emploi. Parcourez nos offres en ligne (CDI, CDD, Stage, Alternance) et postulez gratuitement.</p>
      <b-form inline>
        <b-form-group id="input-group-1" label="Contract: " label-for="input-1">
          <b-form-select id="input-1"  placeholder="select a contract">
            <option v-for="(label, index) in contract" v-bind:key="index" v-bind:value="label">{{ label.value }}</option>
          </b-form-select>
        </b-form-group>
        <b-form-group id="input-group-2" label="Key-Word: " label-for="input-2">
          <b-form-input id="input-2" type="text" placeholder="Enter a keyWord"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Location: " label-for="input-3">
          <b-form-input id="input-3" type="text" placeholder="Enter a location"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">research</b-button>
      </b-form>
        </b-container>
      </b-row>
    <b-container fluid="md">
      <b-row>
        <b-card v-for="offer in offers" v-bind:key="offer._id" v-bind:title="offer.title  +  + offer.entreprise">
          <b-card-text>{{ offer.contract }} {{ offer.location }}</b-card-text>
          <b-card-text>{{ offer.description }}</b-card-text>
          <b-button v-on:click="information(`${ offer._id }`)" >Learn more</b-button>
          <b-button v-on:click="applyJob(`${ offer._id }`)" @click="components='formApp'" v-b-modal ="offers._id">Apply</b-button>
            <b-modal v-bind="offers._id" v-bind:title="offer.entreprise">
              <component v-bind:is="components"></component>
            </b-modal>
        </b-card>
      </b-row>
    </b-container>
  </div>

</template>

<script>

import http from './../../http-common'
import formApply from '@/components/formApply'

export default {
  name: 'Home',
  components: {
    formApp: formApply
  },
  data () {
    return {
      offers: [],
      showInfo: false,
      contract: [],
      companyName: '',
      contractName: '',
      components: this.components
    }
  },

  methods: {
    information (x) {
      console.log(x)
      this.offers.forEach(off => {
        if (off._id === x) {
          if (off.description.length > 0) {
            off.description = ''
            console.log(off.description.length)
          } else {
            http.get('/advertisement/' + x).then((rep) => {
              off.description = rep.data.description
              console.log(off.description.length)
            })
          }
        }
      })
    },
    loadJob () {
      http.get('/advertisements').then(response => {
        response.data.forEach((off) => {
          http.get('/contract/' + off._contractTypeId).then((rep) => {
            this.contractName = rep.data.label
          })
          http.get('/company/' + off._companiesId).then((rep) => {
            this.companyName = rep.data.name
          })
          this.offers.push({ _id: off._id, title: off.title, description: '', company: this.companyName, contract: this.contractName, location: off.location })
        })
      }).catch(e => {
        console.log(e)
      })
    },
    loadContract () {
      http.get('/contracts').then(response => {
        response.data.forEach(d => {
          this.contract.push({ key: d._id, value: d.label })
        })
        console.log(this.contract)
      }).catch(e => {
        console.log(e)
      })
    },
    applyJob (x) {
      localStorage.applyId = x
    }
  },
  beforeMount () {
    this.loadJob()
    this.loadContract()
  }
}
</script>
<style>
.intro{
  padding: 140px 0 140px 0;
  margin: 0 0 5% 0;
  background-color: slateblue;
}
.container> p {
 color: white;
}
.card {
  margin: 1% 0 1% 0;
  box-shadow: 0 0 10px 0 rgba(100, 100, 100, 0.3);
}
label{
  margin: 0 10px 0 10px;
  color: white;
}
.btn{
  margin: 0 2px 0 2px;
}
</style>
