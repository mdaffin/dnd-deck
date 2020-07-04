<template>
  <div class="ability">
    <Dice class="dice" :modifier="mod">
      <div class="container">
        <label>{{ label }}</label>
        <div class="value">{{ value }}</div>
        <div class="mod">{{ displayMod }}</div>
      </div>
    </Dice>
  </div>
</template>

<script>
import Dice from "~/components/Dice.vue";
export default {
  props: ["label", "value"],
  components: { Dice },
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
.ability {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 80px;
  border-radius: 5px;
  margin: 8px;
}

.ability:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 8px;
}

.value {
  font-size: 32px;
}

label {
  font-size: 9px;
  color: #666;
}
</style>
