<template>
  <div class="row">
    <input
      readonly
      type="checkbox"
      :checked="value.proficiency != undefined"
      onclick="return false;"
    />
    <input readonly :value="total" />
    <label>{{ label }}</label>
  </div>
</template>

<script>
import Dice from "~/components/Dice.vue";
export default {
  props: {
    value: { type: Object },
    label: { type: String },
  },
  components: { Dice },
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

  background-color: #fff;
  width: 32px;
  height: 32px;

  border: none;
  border-right: 2px solid #eee;
  transition: 0.3s;
  border-radius: 10px;
}
</style>
