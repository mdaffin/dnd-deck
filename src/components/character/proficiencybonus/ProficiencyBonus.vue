<template>
  <div class="container">
    <input readonly :value="value" />
    <label>Proficiency Bonus</label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  border: 2px solid #eee;
  transition: 0.3s;
  border-radius: 10px;
  margin: 8px;
}

label {
  margin-left: 8px;
}

input {
  display: flex;
  text-align: center;

  background-color: #fff;
  width: 32px;
  height: 32px;

  border: none;
  border-right: 2px solid #eee;
  transition: 0.3s;
  border-radius: 10px;
}
</style>
