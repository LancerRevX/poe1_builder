<template>
  <p>{{ $t('hello') }}</p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'hello-i18n'
})
</script>

<i18n>
{
  "en-US": {
    "hello": "Hello i18n in SFC!"
  },
  "ru-RU": {
    "hello": "Привет, i18n!"
  }
}
</i18n>
