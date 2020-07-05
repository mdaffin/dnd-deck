<template>
  <div class="ability">
    <Dice class="dice" :modifier="mod">
      <div class="container">
        <div class="mod">{{ displayMod }}</div>
        <div class="value">{{ value }}</div>
        <Label>{{ label }}</Label>
      </div>
    </Dice>
  </div>
</template>

<script>
import Dice from "~/components/basic/Dice.vue";
import Label from "~/components/basic/Label.vue";
export default {
  props: {
    label: { type: String },
    value: { type: Number },
  },
  components: { Dice, Label },
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
  border: 2px solid #eee;
  transition: 0.3s;
  width: 80px;
  border-radius: 10px;
  margin: 8px;
}

.ability:hover {
  background-color: #eee;
}

.container {
  padding: 8px;
}

.value {
  font-size: 2.5rem;
}

label {
  font-size: 0.6rem;
  color: #666;
}
</style>
