<template>
  <Layout>
    <h1>{{$page.character.name}}</h1>
    <label>Race: </label>
    <span>{{$page.character.race}}</span>
    <span v-if="$page.character.subrace != ''"> ({{$page.character.subrace}})</span>
    <br/>
    <label>Gender: </label><span>{{$page.character.gender}}</span>
    <h2>Race Features</h2>
    <h3>
      <span>{{$page.character.race}}</span>
      <span v-if="$page.character.subrace != ''"> ({{$page.character.subrace}})</span>
    </h3>
    <FeatureList v-for="feature in $page.races.edges[0].node.features" :key="feature.name" :feature="feature" />
    <h3>Description</h3>
    <div class="post__content" v-html="$page.character.content" />
  </Layout>
</template>

<script>
import FeatureList from "@/components/FeatureList";
export default {
  components: {
    FeatureList
  },
  metaInfo: {
    title: `Character`
  }
};
</script>

<page-query>
query ($id: ID!) {
  character(id: $id) {
    name
    race
    subrace
    gender
    content
  }
  races: allRace(filter: { name: { eq: "Dwarf" } }) {
    edges {
      node {
        name
        path
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
      }
    }
  }
}
</page-query>
