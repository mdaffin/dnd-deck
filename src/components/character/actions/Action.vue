<template>
  <Dice :mod="total">
    <div class="row">
      <ProficiencyMarker :checked="value.proficiency !== undefined" />
      <input readonly :value="total" />
      <label>{{ label }}</label>
    </div>
  </Dice>
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
  border-radius: 5px;
}

.row > * {
  margin: 0 8px;
}

.row:hover {
  background-color: #eee;
}

input {
  text-align: center;
  border: none;

  background-color: transparent;
  width: 32px;
}
</style>
