<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <strong>
          <n-link to="/">DND-DECK</n-link>
        </strong>
        <n-link class="nav__link" to="/">Home</n-link>
        <n-link class="nav__link" to="/dice">Dice Roller</n-link>
      </nav>
    </header>
    <nuxt />
  </div>
</template>

<style scoped>
div,
article,
header,
nav,
form,
a,
main {
  font-family: sans-serif;
  color: #030303;
  margin: 0;
  padding: 0;
}

header {
  background-color: #f1f1dee0;
  padding: 2em 0;
  justify-content: space-evenly;
  border-bottom: 5px solid #930c10;
}

nav {
  display: flex;
  justify-content: flex-start;
}

a {
  text-decoration: none;
  margin: 0 0.5em;
}
</style>
