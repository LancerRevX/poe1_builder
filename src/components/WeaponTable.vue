<template>
    <table class="weapon-table">
        <caption>Weapon<br>on LVL {{ selected.level.number }}</caption>
        <thead>
            <tr>
                <th colspan="2">
                    <select v-model="selected.level.weapon">
                        <option v-for="weapon in weapons" :key="weapon.name" :value="weapon">
                            {{ weapon.name }}
                        </option>
                    </select>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Base damage</td>
                <td>{{ level.weapon.baseDamage[0] }} - {{ level.weapon.baseDamage[1] }}</td>
            </tr>
            <tr>
                <td>Modified damage</td>
                <td>{{ level.damage[0] }} - {{ level.damage[1] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import weapons from '../model/weapons.js';

    export default {
        data: () => ({
            weapons
        }),
        props: {
            selected: Object
        },
        computed: {
            character() {
                return this.selected.character;
            },
            level() {
                return this.selected.level;
            }
        }
    };
</script>
