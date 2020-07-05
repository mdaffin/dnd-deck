<template>
  <div class="row">
    <ProficiencyMarker :checked="value.proficiency !== undefined" />
    <input readonly :value="total" />
    <label>{{ label }}</label>
  </div>
</template>

<script>
import Dice from "~/components/basic/Dice";
import ProficiencyMarker from "./ProficiencyMarker";
export default {
  props: {
    value: { type: Object },
    label: { type: String },
  },
  components: { Dice, ProficiencyMarker },
  computed: {
    total() {
      return this.value.value + (this.value.proficiency || 0);
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

label {
  margin-left: 8px;
}

input {
  text-align: center;
  border: none;

  background-color: #fff;
  width: 32px;
  margin-left: 8px;
}
</style>
