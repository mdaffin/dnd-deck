<template>
  <Layout>
    <h1>{{ $page.character.name }}</h1>
    <label>Race: </label>
    <span>{{ race.name }}</span>
    <span v-if="subrace"> ({{ subrace.name }})</span>
    <br />
    <label>Gender: </label><span>{{ $page.character.gender }}</span>
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
    <div class="post__content" v-html="$page.character.content" />
  </Layout>
</template>

<script>
import FeatureList from "@/components/FeatureList";
import Ability from "@/components/Ability";
export default {
  components: {
    FeatureList,
    Ability,
  },
  metaInfo: {
    title: `Character`,
  },
  computed: {
    race() {
      return this.$page.races.edges[0]?.node;
    },
    subrace() {
      return this.race.subraces?.find(
        (subrace) => subrace.name === this.$page.character.subrace
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
        strength: this.$page.character.ability_scores.strength.base,
        consitiution: this.$page.character.ability_scores.consitiution.base,
        dexterity: this.$page.character.ability_scores.dexterity.base,
        intelligence: this.$page.character.ability_scores.intelligence.base,
        wisdom: this.$page.character.ability_scores.wisdom.base,
        charisma: this.$page.character.ability_scores.charisma.base,
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

<page-query>
query ($id: ID!) {
  character(id: $id) {
    name
    race
    subrace
    gender
    ability_scores {
      strength {
        base
      }
      dexterity {
        base
      }
      consitiution {
        base
      }
      intelligence {
        base
      }
      wisdom {
        base
      }
      charisma {
        base
      }
    }
    content
  }
  races: allRace(filter: { name: { eq: "Dwarf" } }) {
    edges {
      node {
        name
        path
        features {
          name
          description
          ability_scores {
            strength
            dexterity
            consitiution
            intelligence
            wisdom
            charisma
          }
        }
        subraces {
          name
          features {
            name
            description
            ability_scores {
              strength
              dexterity
              consitiution
              intelligence
              wisdom
              charisma
            }
          }
        }
      }
    }
  }
}
</page-query>
