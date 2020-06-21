<template>
  <div>
    <h1>{{ character.name }}</h1>
    <label>Race: </label>
    <span>{{ race.name }}</span>
    <span v-if="subrace"> ({{ subrace.name }})</span>
    <br />
    <label>Gender: </label><span>{{ character.gender }}</span>
    <h2>Ability Scores</h2>
    <Ability label="Strength" :value="ability_scores.strength" />
    <Ability label="Dexterity" :value="ability_scores.dexterity" />
    <Ability label="Consitiution" :value="ability_scores.consitiution" />
    <Ability label="Intelligence" :value="ability_scores.intelligence" />
    <Ability label="Wisdom" :value="ability_scores.wisdom" />
    <Ability label="Charisma" :value="ability_scores.charisma" />
    <h2>Race Features</h2>
    <h3>
      <span>{{ race.name }}</span>
      <span v-if="subrace"> ({{ subrace.name }})</span>
    </h3>
    <FeatureList
      v-for="(feature, index) in race_features"
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
  async asyncData({ params, $content, app }) {
    try {
      const character = await app.character(params.character);
      const race = await app.race(character.race.toLowerCase());
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
    race_features() {
      if (this.subrace) {
        return [...this.race.features, ...this.subrace.features];
      }
      return this.race.features;
    },
    ability_scores() {
      const ability_scores = {
        strength: this.character.ability_scores.strength.base,
        consitiution: this.character.ability_scores.consitiution.base,
        dexterity: this.character.ability_scores.dexterity.base,
        intelligence: this.character.ability_scores.intelligence.base,
        wisdom: this.character.ability_scores.wisdom.base,
        charisma: this.character.ability_scores.charisma.base,
      };
      return this.race_features
        .filter((f) => f.ability_scores)
        .map((f) => f.ability_scores)
        .reduce((acc, cur) => {
          acc.strength += cur.strength || 0;
          acc.dexterity += cur.dexterity || 0;
          acc.consitiution += cur.consitiution || 0;
          acc.intelligence += cur.intelligence || 0;
          acc.wisdom += cur.wisdom || 0;
          acc.charisma += cur.charisma || 0;
          return acc;
        }, ability_scores);
    },
  },
};
</script>
