<template>
  <div>
    <input
      readonly
      type="checkbox"
      :checked="checked"
      onclick="return false;"
    />
  </div>
</template>

<script>
export default {
  props: {
    checked: { type: Boolean },
  },
};
</script>

<style scoped>
input {
  appearance: none;
  border: 2px solid #222;
  border-radius: 100%;
  padding: 4px;
  display: inline-block;
  position: relative;
}

input:checked {
  background-color: #222;
}
</style>
