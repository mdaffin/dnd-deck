<template>
  <div class="container">
    <Action
      v-for="action in actions"
      :key="action.name"
      :label="action.name"
      :value="({ value: action.value, proficiency: action.proficiency })"
    />
    <Label class="label">{{ label }}</Label>
  </div>
</template>

<script>
import Dice from "~/components/Dice.vue";
import Label from "~/components/Label.vue";

import Action from "./Action.vue";

export default {
  props: {
    actions: { type: Array },
    label: { type: String },
  },
  components: { Dice, Action, Label },
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
  padding: 8px;
}

.label {
  width: 100%;
  text-align: center;
}
</style>
