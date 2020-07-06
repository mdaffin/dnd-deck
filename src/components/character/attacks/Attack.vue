<template>
  <div class="row">
    <div class="name">{{ name }}</div>
    <Dice class="dice" :modifier="attack">
      <div>{{ attack }}</div>
    </Dice>
    <Dice
      class="dice"
      :count="damage.count"
      :sides="damage.sides"
      :modifier="damage.modifier"
    >
      <div>{{ displayDamage }}</div>
    </Dice>
    <div>{{ type }}</div>
    <div class="range">{{ range }}</div>
  </div>
</template>

<script>
import Dice from "~/components/basic/Dice";
export default {
  props: {
    name: { type: String },
    attack: { type: Number },
    damage: { type: Object },
    type: { type: String },
    range: { type: Number },
  },
  components: { Dice },
  computed: {
    displayDamage() {
      return `${this.damage.count}d${this.damage.sides}+${this.damage.modifier}`;
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  border-radius: 5px;
}

.row > * {
  margin: 0 8px;
}

.dice:hover {
  background-color: #eee;
}

.name {
  flex-grow: 1;
}

.range {
  min-width: 2rem;
  text-align: right;
}

input {
  text-align: center;
  border: none;
  background-color: transparent;
  min-width: 0;
}
</style>
