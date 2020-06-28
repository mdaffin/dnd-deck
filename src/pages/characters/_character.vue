<template>
  <div>
    <h1>{{ character.name }}</h1>
    <label>Race: </label>
    <span>{{ character.race.name }}</span>
    <br />
    <label>Gender: </label><span>{{ character.gender }}</span>
    <h2>Ability Scores</h2>
    <Ability label="Strength" :value="character.abilityScores.strength" />
    <Ability label="Dexterity" :value="character.abilityScores.dexterity" />
    <Ability
      label="Consitiution"
      :value="character.abilityScores.consitiution"
    />
    <Ability
      label="Intelligence"
      :value="character.abilityScores.intelligence"
    />
    <Ability label="Wisdom" :value="character.abilityScores.wisdom" />
    <Ability label="Charisma" :value="character.abilityScores.charisma" />
    <h2>Race Features</h2>
    <h3>
      <span>{{ character.race.name }}</span>
    </h3>
    <FeatureList
      v-for="(feature, index) in character.race.features"
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
  async middleware({ store }) {
    if (store.state.characters.length === 0) {
      await store.dispatch("fetchData");
    }
  },
  computed: {
    character() {
      if (this.$store.state.characters) {
        const characterName = this.$route.params.character.toLowerCase();
        return this.$store.state.characters.find(
          (c) => c.name.toLowerCase() == characterName
        );
      }
    },
  },
};
</script>
