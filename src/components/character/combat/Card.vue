<template>
  <div class="container">
    <slot></slot>
    <Label>{{ label }}</Label>
  </div>
</template>

<script>
import Label from "~/components/basic/Label.vue";
export default {
  props: {
    label: { type: String },
  },
  components: { Label },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #eee;
  transition: 0.3s;
  border-radius: 10px;
  margin: 8px;
  padding: 8px;
  text-align: center;
}

.ability:hover {
  background-color: #eee;
}

.value {
  font-size: 2.5rem;
}

label {
  font-size: 0.6rem;
  color: #666;
}
</style>
