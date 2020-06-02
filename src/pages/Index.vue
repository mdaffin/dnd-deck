<template>
  <Layout>
    <h1>Hello, world!</h1>

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
