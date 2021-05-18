<template>
  <div class="language-switcher">
    <select v-model="$i18n.locale">
      <option value="en-US">English</option>
      <option value="ru-RU">Русский</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'language-switcher'
})
</script>
