<template>
<section>

  <img src="../assets/main-img.webp" alt="main-image" class="main-image">

  <div class="main-image-text">
    <h1 class="main-image-text-headline">GUTE QUALITÄT LIEGT IMMER IM TREND.</h1>
    <p>Als Komplettanbieter für Wohnimmobilien steht TRENDHAUS für qualitativ hochwertigen,
       lebenswerten und nachhaltig gebauten Wohnraum. Wir entwickeln ganzheitliche
        Immobilienprojekte – von der Vision und Konzeption über die Planung und Errichtung
         bis hin zu Verkauf, Vermietung und Hausverwaltung. Dabei konzentriert sich unsere
          Bauträgergesellschaft auf die beiden Kernbereiche Neubau und Dachgeschossausbau in
           Österreich und ganz Europa.</p>    
  </div>


  <h1 class="aktuelle-objekte-headline">Aktuelle Objekte</h1>
    
  <section class="aktuelle-objekte">

    <div class="aktuelle-objekt">

      <img src="@/assets/aktuelle-objekt1.webp" alt="">

      <h6>Noch 4 Wohnungen frei</h6>

      <div class="aktuelle-objekt-info">

        <h1>Österreich</h1>
        <h1>Melangasse 26, 1220 Wien</h1>
        <p>Das Wohnprojekt Melangasse 26 in 1220 Wien besteht aus 4 hellen,
         modernen Mietwohnungen in den Größen zwischen 47m² und 118m².
          Jede der Wohnungen ist barrierefrei zugänglich und mit Terrassen oder
           Eigengärten ausgestattet.</p>
        <button>Mehr erfahren</button>

      </div>
      
    </div>

    <div class="aktuelle-objekt">
      <img src="@/assets/aktuelle-objekt2.webp" alt="">

      <h6>Noch 6 Wohnungen frei</h6>

      <div class="aktuelle-objekt-info">

        <h1>Österreich</h1>
        <h1>Biberhaufenweg 65, 1220 Wien</h1>

        <p>Das Objekt Biberhaufenweg 65  besteht aus 6 freifinanzierten
         Eigentumswohnungen in den Größen zwischen 32m² und 72m².
          Die hellen 2- oder 3-Zimmer-Wohnungen liegen in unmittelbarer Nähe
           des Erholungsgebietes Mühlwasser.</p>

        <button>Mehr erfahren</button>
      
      </div>
      
    </div>

    <div class="aktuelle-objekt">

      <img src="@/assets/aktuelle-objekt3.webp" alt="">

      <h6>Noch 20 Wohnungen frei</h6>

      <div class="aktuelle-objekt-info">

        <h1>Österreich</h1>
        <h1>Andreas-Huger-Gasse 6, 1220 Wien</h1>

        <p>Das Wohnprojekt Andreas-Huger-Gasse 6 liegt inmitten des 22.
         Bezirkes und umfasst 80 freifinanzierte Eigentumswohnungen in 
         den Größen zwischen 50m² und 150m². Die Fertig-stellung erfolgte im 1.
          Quartal 2017.</p>

        <button>Mehr erfahren</button>

     </div>

    </div>

  </section>

  <SchlusselZumErfolg></SchlusselZumErfolg>


  <section id="contact">
    <h1>Contact Section</h1>
  </section>
  
</section>
</template>

<script>
// @ is an alias to /src
import SchlusselZumErfolg from "@/components/SchlusselZumErfolg.vue";

export default {
  name: "home",
  components: {
    SchlusselZumErfolg
  }
};
</script>

<style lang="scss" scoped>
.main-image {
}
.main-image-text:not(h1) {
  width: 356px;
  height: 296px;
  padding: 1%;
  background-color: rgba(123, 118, 113, 0.6);
  color: white;
  border: 2px solid yellow;
  position: absolute;
  bottom: 100px;
  right: 10%;
  h1 {
  }
}


.aktuelle-objekte-headline {
  text-align: center;
  font-size: 2em;
}

.aktuelle-objekte {
  display: flex;
  .aktuelle-objekt {
    margin: 0 3%;
    img {
      width: 100%;
      height: 44%;
    }
    h6 {
      font-size: 1em;
      text-align: center;
      background-color: #3b3a3a;
      color: #edcd1f;
      padding: 4%;
      position: relative;
      bottom: 47%;
    }
    .aktuelle-objekt-info {
      position: relative;
      bottom: 16%;
      p {
        height: 130px;
      }
      button {
        background-color: white;
        border: 2px solid;
        padding: 3% 7%;
        transition: color 0.2s;
        &:hover{
          -webkit-text-fill-color: #fff200;
          cursor: pointer;
        }
      }
    }
  }
  h1 {
  }
}
</style>


