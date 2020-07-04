<template>
  <div class="container">
    <Details class="details" :details="details" />
    <Abilities :abilityScores="ability_scores" />
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
import Abilities from "~/components/character/Abilities";
import Details from "~/components/character/Details";

export default {
  components: {
    FeatureList,
    Abilities,
    Details,
  },
  async asyncData({ params, $content }) {
    try {
      const character = (
        await $content("characters")
          .where({ path: `/characters/${params.character}` })
          .fetch()
      )[0];
      const race = (
        await $content("races").where({ name: character.race }).fetch()
      )[0];
      return { character, race };
    } catch (err) {
      console.error(err);
      return false;
    }
  },
  computed: {
    details() {
      return {
        name: this.character.name,
        playerName: this.character.playerName,
        race: this.character.race.name,
        subrace: this.subrace.name,
        gender: this.character.gender,
        age: this.character.age,
      };
    },
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
        constitution: this.character.ability_scores.constitution.base,
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
          acc.constitution += cur.constitution || 0;
          acc.intelligence += cur.intelligence || 0;
          acc.wisdom += cur.wisdom || 0;
          acc.charisma += cur.charisma || 0;
          return acc;
        }, ability_scores);
    },
  },
};
</script>

<style scoped>
.details {
  flex-wrap: wrap;
}
</style>
