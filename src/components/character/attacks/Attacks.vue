<template>
  <div class="container">
    <Attack
      v-for="attack in attacks"
      :key="attack.name"
      :name="attack.name"
      :attack="attack.attack"
      :damage="attack.damage"
      :type="attack.type"
      :range="attack.range"
    />
    <Label class="label">Attacks</Label>
  </div>
</template>

<script>
import Label from "~/components/basic/Label.vue";

import Attack from "./Attack.vue";

export default {
  props: {
    attacks: { type: Array },
    label: { type: String },
  },
  components: { Attack, Label },
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
