<template>
  <Layout>
    <h1>{{ $page.race.name }}</h1>
    <div class="post__content" v-html="$page.race.content" />
    <h4>Features</h4>
    <FeatureList
      v-for="feature in $page.race.features"
      :key="feature.name"
      :feature="feature"
    />
    <h2>Subraces</h2>
    <div v-for="subrace in $page.race.subraces" :key="subrace.name">
      <h3>{{ subrace.name }}</h3>
      <h4>Features</h4>
      <FeatureList
        v-for="feature in subrace.features"
        :key="feature.name"
        :feature="feature"
      />
    </div>
  </Layout>
</template>

<script>
import FeatureList from "@/components/FeatureList";
export default {
  components: {
    FeatureList,
  },
  metaInfo: {
    title: `Race`,
  },
};
</script>

<page-query>
query ($id: ID!) {
  race(id: $id) {
    name
    features {
      name
      description
    }
    subraces {
      name
      features {
        name
        description
      }
    }
    content
  }
}
</page-query>
