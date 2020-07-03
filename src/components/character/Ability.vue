<template>
  <div>
    <Dice class="dice" :modifier="mod">
      <label>{{ label }}: </label><span class="value">{{ value }}</span>
      <label> Mod: </label><span class="mod">{{ displayMod }}</span>
    </Dice>
  </div>
</template>

<script>
import Dice from "~/components/Dice.vue";
export default {
  props: ["label", "value"],
  components: {
    Dice,
  },
  computed: {
    mod() {
      return Math.floor((this.value - 10) / 2);
    },
    displayMod() {
      if (this.mod >= 0) {
        return `+${this.mod}`;
      } else {
        return `${this.mod}`;
      }
    },
  },
};
</script>

<style scoped>
.dice {
  display: inline;
}
</style>
