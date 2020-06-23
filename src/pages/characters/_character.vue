<template>
  <div>
    <h1>{{ character.name }}</h1>
    <label>Race: </label>
    <span>{{ race.name }}</span>
    <span v-if="subrace"> ({{ subrace.name }})</span>
    <br />
    <label>Gender: </label><span>{{ character.gender }}</span>
    <h2>Ability Scores</h2>
    <Ability label="Strength" :value="abilityScores.strength" />
    <Ability label="Dexterity" :value="abilityScores.dexterity" />
    <Ability label="Consitiution" :value="abilityScores.consitiution" />
    <Ability label="Intelligence" :value="abilityScores.intelligence" />
    <Ability label="Wisdom" :value="abilityScores.wisdom" />
    <Ability label="Charisma" :value="abilityScores.charisma" />
    <h2>Race Features</h2>
    <h3>
      <span>{{ race.name }}</span>
      <span v-if="subrace"> ({{ subrace.name }})</span>
    </h3>
    <FeatureList
      v-for="(feature, index) in raceFeatures"
      :key="index"
      :feature="feature"
    />
    <h3>Description</h3>
    <div class="post__content" v-html="character.content" />
  </div>
</template>

<script>
import FeatureList from "~/components/FeatureList";
import Ability from "~/components/Ability";
export default {
  components: {
    FeatureList,
    Ability,
  },
  async asyncData({ params, app: { $dndContent } }) {
    try {
      const character = await $dndContent.character(params.character);
      const race = await $dndContent.race(character.race.toLowerCase());
      return { character, race };
    } catch (err) {
      console.error(err);
      return false;
    }
  },
  computed: {
    subrace() {
      return this.race.subraces.find(
        (subrace) => subrace.name === this.character.subrace
      );
    },
    raceFeatures() {
      if (this.subrace) {
        return [...this.race.features, ...this.subrace.features];
      }
      return this.race.features;
    },
    abilityScores() {
      return this.$dndContent.abilityScores(this.character, this.race);
    },
  },
};
</script>
