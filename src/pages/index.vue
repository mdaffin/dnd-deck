<template>
  <main>
    <h1>Hello, world!</h1>

    <h3>Races</h3>
    <div class="races">
      <div v-for="race in races" :key="race.name">
        <n-link :to="`race/${race.name}`">{{ race.name }}</n-link>
      </div>
    </div>

    <h3>Characters</h3>
    <div class="characters">
      <div v-for="character in characters" :key="character.name">
        <n-link :to="`character/${character.name}`">{{ character.name }}</n-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
};
</script>
