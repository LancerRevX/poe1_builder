<template>
    <table class="stats-table">
        <caption>Stats<br>on LVL {{ level.number }}</caption>
        <tbody>
            <tr>
                <td>Endurance</td>
                <td>{{ level.endurance }}</td>
            </tr>
            <tr>
                <td>Health</td>
                <td>{{ level.health }}</td>
            </tr>
            <tr>
                <td>Accuracy</td>
                <td>{{ level.accuracy }}</td>
            </tr>
            <tr>
                <td colspan="2" class="table-subtitle">Defenses</td>
            </tr>
            <tr>
                <td>Deflection</td>
                <td>{{ level.deflection }}</td>
            </tr>
            <tr>
                <td>Fortitude</td>
                <td>{{ level.fortitude }}</td>
            </tr>
            <tr>
                <td>Reflex</td>
                <td>{{ level.reflex }}</td>
            </tr>
            <tr>
                <td>Will</td>
                <td>{{ level.will }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        data: () => ({

        }),
        props: {
            selected: Object
        },
        computed: {
            level() {
                return this.selected.level;
            }
        }
    };
</script>

<style>
    .table-subtitle {
        text-align: center;
        font-weight: bold;
    }
</style>
