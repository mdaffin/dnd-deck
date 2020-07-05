<template>
  <div class="container">
    <DetailsField label="Character Name" :value="details.name" />
    <DetailsField label="Player Name" :value="details.playerName" />
    <DetailsField label="Race" :value="details.race" />
    <DetailsField label="Subrace" :value="details.subrace" />
    <DetailsField label="Gender" :value="details.gender" />
    <DetailsField label="Age" :value="details.age" />
  </div>
</template>

<script>
import DetailsField from "./DetailsField";
export default {
  props: ["details"],
  components: {
    DetailsField,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
}

.container > * {
  flex: 1;
}
</style>
