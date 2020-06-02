<template>
  <Layout>
    <h1>{{$page.character.name}}</h1>
    <label>Race</label><input readonly :value="$page.character.race"/>
    <label>Gender</label><input readonly :value="$page.character.gender"/>
    <div class="post__content" v-html="$page.character.content" />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  character(id: $id) {
    name
    race
    gender
    content
  }
}
</page-query>
