<template>
  <div class="container">
    <SavingThrow label="Strength" :value="savingThrows.strength" />
    <SavingThrow label="Dexterity" :value="savingThrows.dexterity" />
    <SavingThrow label="Constitution" :value="savingThrows.constitution" />
    <SavingThrow label="Intelligence" :value="savingThrows.intelligence" />
    <SavingThrow label="Wisdom" :value="savingThrows.wisdom" />
    <SavingThrow label="Chrisma" :value="savingThrows.charisma" />
  </div>
</template>

<script>
import Dice from "~/components/Dice.vue";
import SavingThrow from "./SavingThrow.vue";
export default {
  props: {
    savingThrows: { type: Object },
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
