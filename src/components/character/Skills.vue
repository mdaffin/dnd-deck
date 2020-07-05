<template>
  <div class="container">
    <SavingThrow
      v-for="skill in skills"
      :key="skill.name"
      :label="skill.name"
      :value="({ value: skill.value, proficiency: skill.proficiency })"
    />
  </div>
</template>

<script>
import Dice from "~/components/Dice.vue";
import SavingThrow from "./SavingThrow.vue";
export default {
  props: {
    skills: { type: Array },
  },
  components: { Dice, SavingThrow },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  border: 2px solid #eee;
  transition: 0.3s;
  border-radius: 10px;
  margin: 8px;
}
</style>
