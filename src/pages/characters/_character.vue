<template>
  <div class="container">
    <Details class="details" :details="details" />
    <section class="abilities">
      <Abilities :abilityScores="abilityScores" />
      <section class="skills">
        <ProficiencyBonus :value="2" />
        <Actions label="Saving Throws" :actions="savingThrows" />
        <Actions label="Skills" :actions="skills" />
      </section>
    </section>
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
import characterComponents from "~/components/character";

export default {
  components: {
    FeatureList,
    ...characterComponents,
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
  methods: {
    mod(value) {
      return Math.floor((value - 10) / 2);
    },
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
    savingThrows() {
      return [
        {
          name: "Strength",
          value: this.mod(this.abilityScores.strength),
        },
        {
          name: "Constitution",
          value: this.mod(this.abilityScores.constitution),
          proficiency: 2,
        },
        {
          name: "Dexterity",
          value: this.mod(this.abilityScores.dexterity),
        },
        {
          name: "Intelligence",
          value: this.mod(this.abilityScores.intelligence),
        },
        {
          name: "Wisdom",
          value: this.mod(this.abilityScores.wisdom),
        },
        {
          name: "Charisma",
          value: this.mod(this.abilityScores.charisma),
          proficiency: 2,
        },
      ];
    },

    skills() {
      return [
        {
          name: "Athletics (Str)",
          value: this.mod(this.abilityScores.strength),
          proficiency: 2,
        },
        {
          name: "Acrobatics (Dex)",
          value: this.mod(this.abilityScores.dexterity),
        },
        {
          name: "Sleight of Hand (Dex)",
          value: this.mod(this.abilityScores.dexterity),
        },
        {
          name: "Stealth (Dex)",
          value: this.mod(this.abilityScores.dexterity),
        },
        {
          name: "Arcana (Int)",
          value: this.mod(this.abilityScores.intelligence),
        },
        {
          name: "History (Int)",
          value: this.mod(this.abilityScores.intelligence),
        },
        {
          name: "Investigation (Int)",
          value: this.mod(this.abilityScores.intelligence),
        },
        {
          name: "Nature (Int)",
          value: this.mod(this.abilityScores.intelligence),
        },
        {
          name: "Religion (Int)",
          value: this.mod(this.abilityScores.intelligence),
        },
        {
          name: "Animal Handling (Wis)",
          value: this.mod(this.abilityScores.wisdom),
        },
        {
          name: "Insight (Wis)",
          value: this.mod(this.abilityScores.wisdom),
        },
        {
          name: "Medicine (Wis)",
          value: this.mod(this.abilityScores.wisdom),
        },
        {
          name: "Perception (Wis)",
          value: this.mod(this.abilityScores.wisdom),
        },
        {
          name: "Survival (Wis)",
          value: this.mod(this.abilityScores.wisdom),
        },
        {
          name: "Deception (Cha)",
          value: this.mod(this.abilityScores.charisma),
        },
        {
          name: "Intimidation (Cha)",
          value: this.mod(this.abilityScores.charisma),
        },
        {
          name: "Performance (Cha)",
          value: this.mod(this.abilityScores.charisma),
        },
        {
          name: "Persuasion (Cha)",
          value: this.mod(this.abilityScores.charisma),
        },
      ];
    },

    abilityScores() {
      const abilityScores = {
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
        }, abilityScores);
    },
  },
};
</script>

<style scoped>
.details {
  flex-wrap: wrap;
}

section.abilities {
  display: flex;
}
</style>
