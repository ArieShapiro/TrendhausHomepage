<template>
  <section>
    <div class="navbar-container">
      <div class="nav-bar animated fadeInDown">
        <router-link class="nav-logo" to="/">
          <img @click="onLogo()" src="@/assets/trendhaus-logo.webp" alt="logo">
        </router-link>

        <div class="nav-links">
          <router-link class="nav unternehmen" to="/">Unternehmen</router-link>

          <!-- 1st Dropdown -->
          <div class="nav unternehmen-dropdown">
            <router-link to="/unternehmen/team">TEAM</router-link>
            <router-link to="/unternehmen/aktuelles">AKTUELLES</router-link>
          </div>

          <router-link class="nav projekte" to="/projekte">Projekte</router-link>

          <!-- 2nd Dropdown -->
          <div class="nav projekte-dropdown">
            <router-link to="/projekte/fertiggestellte-projekte">FERTIGGESTELLTE PROJEKTE</router-link>
            <router-link to="/projekte/projekte-in-bau">PROJEKTE IN BAU</router-link>
            <router-link to="/projekte/projekte-in-planung">PROJEKTE IN PLANUNG</router-link>
            <router-link to="/projekte/referenzen">REFERENZEN</router-link>
          </div>

          <router-link class="nav" to="/investments">Investments</router-link>
          <router-link class="nav" to="/partners">Partners</router-link>
          <a class="nav" href="#contact" @click="onKontakts()">Kontakt</a>
        </div>
      </div>
      <div class="white-border-bottom"></div>
    </div>

    <router-view/>
  </section>
</template>

<script>
export default {
  methods: {

    onKontakts() {
      this.$router.push("/");
      setTimeout(() => {
        document.getElementById("contact").scrollIntoView(true);
      }, 1);
    },

    onLogo() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>


<style>
* {
  font-family: "Lato", sans-serif;
}
body {
  margin: 0;
  padding: 0;
}
.nav,
.unternehmen-dropdown,
.projekte-dropdown {
  text-decoration: none;
  padding: 3%;
  font-size: 1.4rem;
  color: black;
  transition: color 0.2s;
}
.nav:hover,
.unternehmen-dropdown a:hover,
.projekte-dropdown a:hover {
  color: #fff200;
}

.navbar-container {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  border-top: 5px solid yellow;
  border-bottom: 5px solid yellow;
  margin: 8px 0 0;
}
.white-border-bottom {
  height: 8px;
}

img {
  width: 100%;
  height: auto;
}
.nav-logo {
  width: 25%;
  padding: 5px 0 5px 20px;
}
.nav-logo:hover {
  cursor: pointer;
}

.nav-links {
  padding: 3%;
  position: relative;
}

.unternehmen-dropdown,
.projekte-dropdown {
  display: none;
  position: absolute;
  background-color: #ffffff;
  width: 92px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 0% 3% 0% 3%;
}

.unternehmen-dropdown {
  font-size: 1em;
  padding: 0;
  left: 72px;
  width: 115px;
}
.projekte-dropdown {
  right: 386px;
  font-size: 1em;
  width: 165px;
  padding: 0;
}

.unternehmen-dropdown a,
.projekte-dropdown a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.unternehmen:hover ~ .unternehmen-dropdown {
  display: block;
}
.unternehmen-dropdown:hover {
  display: block;
}
.projekte:hover ~ .projekte-dropdown {
  display: block;
}
.projekte-dropdown:hover {
  display: block;
}
</style>
