<template>
  <div>
    <Ability label="Strength" :value="abilityScores.strength" />
    <Ability label="Dexterity" :value="abilityScores.dexterity" />
    <Ability label="Constitution" :value="abilityScores.constitution" />
    <Ability label="Intelligence" :value="abilityScores.intelligence" />
    <Ability label="Wisdom" :value="abilityScores.wisdom" />
    <Ability label="Chrisma" :value="abilityScores.charisma" />
  </div>
</template>

<script>
import Ability from "./Ability.vue";
export default {
  props: ["abilityScores"],
  components: { Ability },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
