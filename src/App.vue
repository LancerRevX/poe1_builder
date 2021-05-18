<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <language-switcher></language-switcher>
    <hello-i18n></hello-i18n>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloI18n from './components/HelloI18n.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

export default Vue.extend({
  name: 'App',
  components: {
    LanguageSwitcher,
    HelloI18n
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
