<template>
  <main>
    <h1>Hello, world!</h1>

    <h3>Characters</h3>
    <div class="characters">
      <div v-for="character in characters" :key="character.name">
        <n-link :to="character.href">{{ character.name }}</n-link>
      </div>
    </div>
    <h3>Races</h3>
    <div class="races">
      <div v-for="race in races" :key="race.name">
        <n-link :to="race.href">{{ race.name }}</n-link>
      </div>
    </div>
    <h3>Classes</h3>
    <div class="classes">
      <div v-for="char_class in classes" :key="char_class.name">
        <n-link :to="char_class.href">{{ char_class.name }}</n-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData() {
    const key_to_href = key => key.replace(/^\.(.*)\.json$/, "$1");
    const resolve = require.context("~/content", true, /\.json$/);
    const filter = collection =>
      resolve
        .keys()
        .filter(key => key.startsWith(collection))
        .map(key => ({ href: key_to_href(key), ...resolve(key) }));
    return {
      characters: filter("./characters/"),
      races: filter("./races/"),
      classes: filter("./classes/")
    };
  },
  data() {
    return {
      prefix: "characters"
    };
  }
};
</script>
