<template>
  <div>
    <Dice :modifier="Number(mod)">
<<<<<<< HEAD
        <label>{{ label }}: </label><span class="value">{{ value }}</span>
        <label> Mod: </label><span class="mod">{{ mod }}</span>
=======
      <label>{{ label }}: </label><span class="value">{{ value }}</span>
      <label> Mod: </label><span class="mod">{{ mod }}</span>
>>>>>>> a3b854232d96bcb24543967fec03ea22595a87fc
    </Dice>
  </div>
</template>

<script>
<<<<<<< HEAD
import Dice from '@/components/Dice.vue'
export default {
  props: ["label", "value"],
  components: {
        Dice
=======
import Dice from "@/components/Dice.vue";
export default {
  props: ["label", "value"],
  components: {
    Dice,
>>>>>>> a3b854232d96bcb24543967fec03ea22595a87fc
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
