<template>
  <Layout>
    <h1>Hello, world!</h1>

    <h3>Races</h3>
    <div class="races">
      <div v-for="edge in $page.races.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
      </div>
    </div>

    <h3>Characters</h3>
    <div class="characters">
      <div v-for="edge in $page.characters.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
</style>

<page-query>
query {
  races: allRace {
    edges {
      node {
        id
        name
        path
      }
    }
  }
  characters: allCharacter {
    edges {
      node {
        id
        name
        path
      }
    }
  }
}
</page-query>
