<script src="../scripts/character-switcher.js"></script>
<style src="../styles/character-switcher.css"></style>
<template>
    <div class="character-switcher">

        <div class="party-buttons-block">
            <label>
                Full party
                <input type="radio" name="party-on" v-on:click="party = true" v-bind:checked="party">
            </label>
            <label>
                Single character
                <input type="radio" name="party-on" v-on:click="party = false" v-bind:checked="!party">
            </label>
        </div>

        <div class="single-character-card" v-if="!party">
            <div class="character-card" :class="{'story-companion': storyCompanions.includes(selected.character)}">
                <input type="text" v-model="selected.character.name" v-if="selected.character == mainCharacter">
                <select v-model="selected.character">
                    <option :value="mainCharacter">Custom character</option>
                    <option v-for="storyCompanion in storyCompanions" :key="storyCompanion.name" :value="storyCompanion">
                        {{ storyCompanion.name }}
                    </option>
                </select>
            </div>
        </div>

        <div class="party-character-cards" v-else-if="party">
            <div class="character-card" :class="{'selected': selected.character == mainCharacter}">
                <span style="grid-row: 2;">Main character</span>
                <input type="text" v-model="mainCharacter.name">
                <button @click="selectCharacter(mainCharacter)">
                    {{ buttonText }}
                </button>
            </div>
            <div
                class="character-card"
                :class="{
                    'story-companion': storyCompanions.includes(selectedCompanions[i]),
                    'selected': selectedCompanions[i] == selected.character,
                    'empty': selectedCompanions[i] === null
                }"
                v-for="i in [0, 1, 2, 3, 4]"
                :key="i"
            >
                <input
                    type="text"
                    v-if="customCompanions.includes(selectedCompanions[i])"
                    v-model="selectedCompanions[i].name"
                    placeholder="Name"
                >
                <select v-model="selectedCompanions[i]">
                    <option
                        v-for="storyCompanion in storyCompanions"
                        :key="storyCompanion.name"
                        :value="storyCompanion"
                        :selected="selectedCompanions[i] == storyCompanion"
                    >
                        {{ storyCompanion.name }}
                    </option>
                    <option
                        v-for="j in customCompanions.length"
                        :key="j"
                        :value="customCompanions[j - 1]"
                        :selected="selectedCompanions[i] == customCompanions[j - 1]"
                    >
                        Custom adventurer {{ j }}
                    </option>
                    <option :value="null">Empty</option>
                </select>
                <button
                    v-if="selectedCompanions[i] != null"
                    @click="selectCharacter(selectedCompanions[i])"
                >
                    {{ buttonText }}
                </button>
            </div>
        </div>

        <div class="saveload-buttons-block">
            <button class="randomize-button" @click="randomize()">Randomize</button>
            <button class="get-link-button" v-on:click="getLink()">Get link</button>
        </div>
    </div>
</template>
