<template>
  <section>
    <section class="schlussel-zum-erfolg">
    
        <img src="../assets/aktuelle-objekt1.webp" alt="Projekt 1">

        <div class="schlussel-zum-erfolg-text">

          <h1>Der Schlüssel zum Erfolg:
               Erfahrung, Kompetenz und Qualität</h1>
          <p>Als TRENDHAUS Kunde bauen Sie auf einen verlässlichen Partner
               bei der Verwirklichung Ihrer Wohnträume. Sie profitieren von langjähriger Erfahrung,
                hoher fachlicher Kompetenz und Top-Qualität. Wir wollen,
                 dass Sie langfristig zufrieden sind – unabhängig davon,
                 ob Sie in ein Anlageobjekt investieren oder eine Wohnung selber nutzen.
                 Aus diesem Grund steht Beratung auf Augenhöhe – 
                 vom Erstgespräch bis zum Übergabetermin – im Mittelpunkt unserer Kundenbeziehungen.
                 Bei unseren Projekten konzentrieren wir uns auf die Faktoren Lage,
                 Architektur und Ausstattung. Dabei bieten wir Ihnen bereits in der
                 Plan- und Bauphase die Möglichkeit, Ihren neuen Lebensmittelpunkt aktiv mitzugestalten.
                 So schaffen wir Wohnqualität zum Wohlfühlen und gewährleisten
                 gleichzeitig eine Wertsteigerung Ihrer Immobilie.</p>
         </div>   

    </section> 

    <section class="fundament-einer-geldanlage">

      <div class="geldanlage-text-and-img-container">

        <div class="geldanlage-text">
          <h2>Das Fundament einer sicheren Geldanlage</h2>
          <p>Investieren Sie heute in die Zukunft des Wohnens und beteiligen Sie sich an exklusiven Immobilienprojekten von TRENDHAUS.
             Ob Dachgeschossausbau oder Neubauprojekt – Sie profitieren mit Ihrem Investment in einzigartige Erfolgsprojekte von hohen Erträgen und grundbürgerlicher Besicherung.
             Sie möchten gerne mehr erfahren und
             Ihr Geld gewinnbringend anlegen?
             Einer unserer Partner wird Sie gerne beraten!
             Kontaktieren Sie uns einfach via E-Mail
             oder telefonisch unter: +43 1 26 36 770</p>
        </div>

        <img src="../assets/geldanlage2.jpg" alt="Tablet showing Statisctics">

      </div>     

    </section>

    <section class="unsere-kompetenzen">

      <h1>Unsere Kompetenzen</h1>

      <div class="kompetenzen-conteiner">      

        <div class="kompetenz">
          <i class="far fa-map"></i>
          <h2>Planung</h2>
          <p>Unsere Architekten legen bei der Entwicklung innovativer Wohnimmobilien großen Wert auf Nachhaltigkeit und Funktionalität zu leistbaren Preisen.</p>
        </div>

        <div class="kompetenz">
          <i class="fas fa-clipboard-list"></i>
          <h2>Errichtung</h2>
          <p>Unsere Bauabteilung errichtet ganzheitliche Wohnprojekte in Österreich und ganz Europa – von Grundsteinlegung bis zur Fertigstellung.</p>
        </div>

        <div class="kompetenz">
          <i class="fas fa-business-time"></i>
          <h2>Vertrieb</h2>
          <p>Ob Anleger oder Eigennutzer, ob Familie oder Single – unser Team unterstützt Sie dabei, Ihren Wohntraum in die Realität umzusetzen und steht Ihnen in allen Fragen zur Verfügung.</p>
        </div>

        <div class="kompetenz">
          <i class="fas fa-home"></i>
          <h2>Hausverwaltung</h2>
          <p>Wir sind auch nach dem Kauf für Sie da! Unsere Mitarbeiter der Hausverwaltung betreuen Sie in Ihrer neuen Wohnumgebung und gehen gerne auf Ihre Anliegen ein.</p>
        </div>

      </div>

    </section>

  </section>

   
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.schlussel-zum-erfolg {
  background-color: #949494;
  height: 520px;
  display: flex;
  justify-content: space-evenly;
  img {
    width: 475px;
    height: 475px;
    outline: 3px solid #fff;
    outline-offset: -11px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    position: relative;
    bottom: 40px;
  }

  .schlussel-zum-erfolg-text {
    color: white;
    width: 415px;
    h1 {
      font-size: 1.4em;
    }
  }
}

.fundament-einer-geldanlage {
  margin-top: 35px;
  height: 80vh;
  background-color: #f7f7f7;
  .geldanlage-text-and-img-container {
    display: flex;
    justify-content: center;
    padding-top: 150px;
  }
  .geldanlage-text {
    margin-right: 65px;
    width: 350px;
    h2 {
      text-align: right;
    }
    p {
      text-align: -webkit-right;
    }
  }
  img {
    width: 410px;
    height: 410px;
    outline: 3px solid #e8e04d;
    outline-offset: -11px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    position: relative;
    bottom: 40px;
  }
}

.unsere-kompetenzen {
  h1 {
    text-align: center;
    font-size: 2em;
  }
  .kompetenzen-conteiner {
    display: flex;
  }
}
</style>
 


