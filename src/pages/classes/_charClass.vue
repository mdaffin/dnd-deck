<template>
  <div>
    <h1>{{ charClass.name }}</h1>
    <h4>Features</h4>
    <FeatureList
      v-for="feature in charClass.features"
      :key="feature.name"
      :feature="feature"
    />
    <h2>Subclasss</h2>
  </div>
</template>

<script>
import FeatureList from "~/components/FeatureList";
export default {
  components: {
    FeatureList,
  },
  async middleware({ store }) {
    if (store.state.classes.length === 0) {
      await store.dispatch("fetchData");
    }
  },
  computed: {
    charClass() {
      if (this.$store.state.classes) {
        const className = this.$route.params.charClass.toLowerCase();
        return this.$store.state.classes.find(
          (c) => c.name.toLowerCase() == className
        );
      }
    },
  },
};
</script>
