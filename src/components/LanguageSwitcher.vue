<template>
    <div class="language-switcher">
        <h2>{{ $t('language') }}</h2>
        <button v-on:click="$root.$i18n.locale = 'en-US'">English</button>
        <button v-on:click="$root.$i18n.locale = 'ru-RU'">Русский</button>
    </div>
</template>

<script>
    export default {
        name: 'language-switcher'
    };
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
