<template>
  <main>
    <h1>Hello, world!</h1>

    <h3>Characters</h3>
    <div class="characters">
      <div v-for="character in characters" :key="character.name">
        <n-link :to="character.path">{{ character.name }}</n-link>
      </div>
    </div>
    <h3>Races</h3>
    <div class="races">
      <div v-for="race in races" :key="race.name">
        <n-link :to="race.path">{{ race.name }}</n-link>
      </div>
    </div>
    <h3>Classes</h3>
    <div class="classes">
      <div v-for="char_class in classes" :key="char_class.name">
        <n-link :to="char_class.path">{{ char_class.name }}</n-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return {
      characters: await $content("characters").only(["name", "path"]).fetch(),
      races: await $content("races").only(["name", "path"]).fetch(),
      classes: await $content("classes").only(["name", "path"]).fetch(),
    };
  },
  data() {
    return {
      prefix: "characters",
    };
  },
};
</script>
