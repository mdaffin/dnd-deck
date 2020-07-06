<template>
  <div class="container">
    <Card label="Armor Class">{{ armor }}</Card>
    <Card label="Hit Points">{{ hitPoints }}/{{ maxHitPoints }}</Card>
    <Card label="Hit Dice">{{ hitDice }}</Card>
    <Card label="Speed">{{ speed }}</Card>
    <Card label="Passive Perception">{{ passivePerception }}</Card>
    <Card label="Initiative">{{ initiative }}</Card>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  props: {
    armor: { type: Number },
    hitPoints: { type: Number },
    maxHitPoints: { type: Number },
    hitDice: { type: String },
    speed: { type: Number },
    passivePerception: { type: Number },
    initiative: { type: Number },
  },
  components: { Card },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0px;
}
</style>
