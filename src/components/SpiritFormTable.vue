<template>
    <table v-if="character.class.name == 'Druid'">
        <tr>
            <td>Spirit form</td>
            <td>
                <select v-model="character.spiritForm">
                    <option
                        v-for="spiritForm in character.class.spiritForms"
                        :key="spiritForm.name"
                        :value="spiritForm"
                    >
                        {{ spiritForm.name }}
                    </option>
                </select>
            </td>
        </tr>
    </table>
</template>

<script>
    import Character from '../model/character.js';

    export default {
        name: 'spirit-form-table',
        props: {
            character: Character,
            selected: Object
        }
    };
</script>
