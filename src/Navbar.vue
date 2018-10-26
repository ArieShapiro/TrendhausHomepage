<template>
  <section>
    <div class="navbar-container">
       <div class="nav-bar animated fadeInDown">
      <router-link class="nav-logo" to="/">
        <img src="@/assets/trendhaus-logo.webp" alt="logo">
      </router-link>
      <div class="nav-links">
        <a class="nav unternehmen" >Unternehmen</a> 
        <div class="nav unternehmen-dropdown">
          <a href="#">TEAM</a>
          <a href="#">AKTUELLES</a>
        </div>
        <router-link class="nav projekte" to="/about">Projekte</router-link>
        <div class="nav projekte-dropdown">
          <a href="#">FERTIGGESTELLTE PROJEKTE</a>
          <a href="#">PROJEKTE IN BAU</a>
          <a href="#">PROJEKTE IN PLANUNG</a>
          <a href="#">REFERENZEN</a>
        </div>
        <router-link class="nav" to="/about">Investments</router-link>
        <router-link class="nav" to="/about">Partners</router-link>
          <a class="nav" href="#contact">Kontakt</a>
      </div>
    </div>
    <div class="white-border-bottom"></div>
    </div>      
    
    <router-view/>
  </section>  
</template>

<style>
* {
  font-family: "Fjalla One", sans-serif;
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
.white-border-bottom{
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
  left: 865px;
}
.projekte-dropdown {
  right: 349px;
  font-size: 1em;
  width: 195px;
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
