<template>
  <div>
    <label>{{ label }}: </label><span class="value">{{ value }}</span>
    <label> Mod: </label><span class="mod">{{ mod }}</span>
  </div>
</template>

<script>
export default {
  props: ["label", "value"],
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
