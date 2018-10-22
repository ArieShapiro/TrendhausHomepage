<template>
  <section>
    <div class="nav-bar animated fadeInDown">
      <div class="nav-logo">
        <img src="@/assets/trendhaus-logo.webp" alt="logo">
      </div>
      <div class="nav-links">
        <a class="nav unternehmen" >Unternehmen</a> 
        <div class="nav unternehmen-dropdown">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </div>
        <router-link class="nav" to="/about">Projekte</router-link>
        <router-link class="nav" to="/about">Investments</router-link>
        <router-link class="nav" to="/about">Partners</router-link>
          <a class="nav" href="#contact">Kontakt</a>
      </div>
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
.nav, .unternehmen-dropdown a {
  text-decoration: none;
  padding: 3%;
  font-size: 1.4rem;
  color: black;
  transition: color 0.2s;
}
.nav:hover, .unternehmen-dropdown a:hover {
  color: #fff200;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  border-top: 5px solid yellow;
  border-bottom: 5px solid yellow;
  margin: 8px 0;
}
img {
  width: 100%;
  height: auto;
}
.nav-logo {
  width: 25%;
}
.nav-logo:hover {
  cursor: pointer;
}

.nav-links {
  padding: 3%;
}

.unternehmen-dropdown {
  display: none;
  position: absolute;
  background-color: #ffffff;
  width: 92px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 0% 3% 0% 3%;
}

.unternehmen-dropdown a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.unternehmen:hover ~ .unternehmen-dropdown{
  display: block
}

.unternehmen-dropdown:hover{
  display: block
}

</style>
