<template>
    <table>
        <caption>{{ title }}</caption>
    </table>
</template>

<script>
    export default {
        name: 'abilities-table',
        props: {
            selected: Object
        },
        computed: {
            title: function() {
                // if (['druid', 'priest', 'wizard']) {

                // }
                return this.$t('abilities');
            }
        }
    };
</script>

<i18n>
{
    "en-US": {
        "abilities": "Abilities",
        "spells": "Spells"
    },
    "ru-RU": {
        "abilities": "Способности",
        "spells": "Заклинания"
    }
}
</i18n>
