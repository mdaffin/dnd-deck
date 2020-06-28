<template>
  <main>
    <h1>Hello, world!</h1>

    <h3>Characters</h3>
    <div class="characters">
      <div v-for="character in characters" :key="character.name">
        <n-link :to="`characters/${character.name.toLowerCase()}`">{{
          character.name
        }}</n-link>
      </div>
    </div>
    <h3>Races</h3>
    <div class="races">
      <div v-for="race in races" :key="race.name">
        <n-link :to="`races/${race.name.toLowerCase()}`">{{
          race.name
        }}</n-link>
      </div>
    </div>
    <h3>Classes</h3>
    <div class="classes">
      <div v-for="char_class in classes" :key="char_class.name">
        <n-link :to="`classes/${char_class.name.toLowerCase()}`">{{
          char_class.name
        }}</n-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async middleware({ store }) {
    if (store.state.characters.length === 0) {
      await store.dispatch("fetchData");
    }
  },
  computed: {
    characters() {
      return this.$store.state.characters.map(({ name }) => ({ name }));
    },
    races() {
      return this.$store.state.races.map(({ name }) => ({ name }));
    },
    classes() {
      return this.$store.state.classes.map(({ name }) => ({ name }));
    },
  },
};
</script>
