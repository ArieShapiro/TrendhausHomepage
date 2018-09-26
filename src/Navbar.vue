<template>
  <section>
    <div class="nav-bar">
      <div class="nav-logo">
        <img src="@/assets/trendhaus-logo.webp" alt="">
      </div>
      <div class="nav-links">
        <router-link class="nav" to="/">Unternehmen</router-link> 
        <router-link class="nav" to="/about">Projekte</router-link>
        <router-link class="nav" to="/about">Investments</router-link>
        <router-link class="nav" to="/about">Partners</router-link>
        <router-link class="nav" to="/about">Kontakt</router-link>
      </div>
    </div>
    <router-view/>
  </section>  
</template>

<style scoped>
.nav {
  text-decoration: none;
  padding: 2%;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  border-top: 5px solid yellow;
  border-bottom: 5px solid yellow;
}
img {
  width: 100%;
  height: auto;
}
.nav-logo {
  width: 25%;
}
</style>
