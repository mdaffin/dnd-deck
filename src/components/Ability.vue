<template>
  <div>
    <label>{{label}}: </label><span>{{value}}</span>
    <label> Mod: </label><span>{{mod}}</span>
  </div>
</template>

<script>
export default {
  props: ["label", "value"],
  computed: {
    mod() {
      let mod = Math.round((this.value - 10) / 2);
      if (mod >= 0) {
        return `+${mod}`;
      } else {
        return `${mod}`;
      }
    }
  },
}
</script>
