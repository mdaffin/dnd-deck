<template>
  <div class="field">
    <input readonly :value="value" />
    <Label>{{ label }}</Label>
  </div>
</template>

<script>
import Label from "~/components/basic/Label.vue";
export default {
  props: ["label", "value"],
  components: { Label },
};
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  padding: 8px;
}

input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #666;
}

label {
  color: #666;
  font-size: 0.6rem;
}
</style>
