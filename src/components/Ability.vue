<template>
  <div>
    <Dice :modifier="Number(mod)">
      <label>{{ label }}: </label><span class="value">{{ value }}</span>
      <label> Mod: </label><span class="mod">{{ mod }}</span>
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
      let mod = Math.floor((this.value - 10) / 2);
      if (mod >= 0) {
        return `+${mod}`;
      } else {
        return `${mod}`;
      }
    },
  },
};
</script>
