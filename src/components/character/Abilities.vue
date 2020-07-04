<template>
  <div>
    <Ability label="Strength" :value="strength" />
    <Ability label="Dexterity" :value="dexterity" />
    <Ability label="Constitution" :value="constitution" />
    <Ability label="Intelligence" :value="intelligence" />
    <Ability label="Wisdom" :value="wisdom" />
    <Ability label="Chrisma" :value="charisma" />
  </div>
</template>

<script>
import Ability from "./Ability.vue";
export default {
  props: [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ],
  components: { Ability },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
