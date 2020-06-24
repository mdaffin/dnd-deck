<template>
  <div>
    <header>
      <div class="logo">
        <n-link to="/">
          <div class="logo-dnd">DND</div>
          <div class="logo-deck">Deck</div>
        </n-link>
      </div>
      <nav>
        <n-link class="nav__link" to="/">Home</n-link>
        <n-link class="nav__link" to="/dice">Dice Roller</n-link>
      </nav>
    </header>
    <nuxt />
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  background-color: #f1f1dee0;
  height: 56px;
  border-bottom: 4px solid #930c10;
  font-size: 24px;
}

.logo {
  display: flex;
  align-items: stretch;
  font-weight: bold;
  margin: 0 16px;
  height: 100%;
}

.logo a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo-dnd {
  font-size: 10px;
  font-weight: bold;
  margin-bottom: -10px;
}

.logo-deck {
  font-size: 20px;
}

nav {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}

a {
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #030303;
  text-decoration: none;
  margin: 0 8px;
}

a:hover {
  margin-bottom: -4px;
  border-bottom: 4px solid #222;
}
</style>
