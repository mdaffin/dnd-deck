<template>
  <div>
    <h1>{{ race.name }}</h1>
    <h4>Features</h4>
    <FeatureList
      v-for="feature in race.features"
      :key="feature.name"
      :feature="feature"
    />
    <h2>Subraces</h2>
    <div v-for="subrace in race.subraces" :key="subrace.name">
      <h3>{{ subrace.name }}</h3>
      <h4>Features</h4>
      <FeatureList
        v-for="feature in subrace.features"
        :key="feature.name"
        :feature="feature"
      />
    </div>
  </div>
</template>

<script>
import FeatureList from "~/components/FeatureList";
export default {
  components: {
    FeatureList,
  },
  async asyncData({ params, $content }) {
    try {
      return {
        race: (
          await $content("races")
            .where({ path: `/races/${params.race}` })
            .fetch()
        )[0],
      };
    } catch (err) {
      console.error(err);
      return false;
    }
  },
};
</script>
