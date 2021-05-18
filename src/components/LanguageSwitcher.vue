<template>
  <div class="language-switcher">
    <h2>{{ $t('language') }}</h2>
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

<i18n>
{
  "en-US": {
    "language": "Language"
  },
  "ru-RU": {
    "language": "Язык"
  }
}
</i18n>
