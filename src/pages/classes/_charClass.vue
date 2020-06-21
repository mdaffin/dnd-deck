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
  async asyncData({ params, app }) {
    try {
      return { charClass: await app.charClass(params.charClass) };
    } catch (err) {
      console.error(err);
      return false;
    }
  },
};
</script>
