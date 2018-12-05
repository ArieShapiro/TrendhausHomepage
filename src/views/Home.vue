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

    <aktuelle-objekte></aktuelle-objekte>  

    <SchlusselZumErfolg></SchlusselZumErfolg>

    <Kontakt></Kontakt>  

    <Footer></Footer>
  
</section>
</template>

<script>
// @ is an alias to /src
import SchlusselZumErfolg from "@/components/SchlusselZumErfolg.vue";
import AktuelleObjekte from '@/components/AktuelleObjekte.vue';
import Kontakt from '@/components/Kontakt.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    SchlusselZumErfolg,
    AktuelleObjekte,
    Kontakt,
    Footer,
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
</style>





