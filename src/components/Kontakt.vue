<template>
  <section id="contact">
    <h1>Kontakt</h1>

    <div class="contact-container">
      <section class="contact-left">
        <div id="googleMap" style="width:100%;height:400px;"></div>

        <h3>Besuchen Sie uns!</h3>

        <p>Montag bis Donnerstag: 9:00-17:00 Uhr</p>
        <p>Freitag: 9:00-14:00 Uhr</p>

        <div class="adress">
          <i class="fas fa-map-marker-alt"></i>
          <p>Trendhaus-Gruppe</p>
          <p>Biberhaufenweg 10/1/7</p>
          <p>1220 Wien</p>
          <p>Österreich</p>
        </div>

        <div class="tel-fax-email">
          <i class="fas fa-phone"></i>
          <p>Telefon: +43 1 26 36 770</p>

          <p>Fax: +43 1 23 61 771</p>

          <i class="fas fa-at"></i>
          <p>Email: office@trendhaus.eu</p>
        </div>
      </section>

      <section class="contact-right">
        <h1>Wir freuen uns auf Ihre Anfrage!</h1>

        <p>Bitte schreiben Sie uns Ihre Nachricht in das Kontaktformular</p>
        <p>oder rufen Sie uns an.</p>
        <p>Wir melden uns so schnell wie möglich bei Ihnen.</p>

        <form action="/send-mail" method="POST">
          <input type="text" name="name" placeholder="Name" required>
          
          <input type="email" name="email" placeholder="Email Adresse" required>
          
          <input type="text" name="subject" placeholder="Betreff" required>
          
          <textarea type="text" name="message" placeholder="Nachricht"></textarea>
          
          <input type="submit" value="Senden" @clikc="onSend()">
        </form>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    myMap() {
      var mapProp = {
        center: new google.maps.LatLng(48.21593, 16.4801521, 15),
        zoom: 13
      };
      var map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp
      );

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(48.21593, 16.4825521, 15)
      });

      marker.setMap(map);
    },
    onSend() {
      setTimeout(() => {
        this.$router.push("/");
      }, 5000);
    }
  },
  mounted() {
    this.myMap();
  }
};
</script>

<style lang="scss" scoped>
#contact {
  h1 {
    text-align: center;
    margin: 7%;
    font-size: 2em;
  }
  .contact-container {
    display: flex;
    justify-content: center;
  }
  .contact-left {
    width: 30%;
    margin-right: 40px;
    .adress {
      margin: 10% 0;
      line-height: 50%;
    }
    .tel-fax-email {
      margin: 10% 0;
      line-height: 50%;
    }
    i {
      position: relative;
      right: 30px;
      top: 28px;
      font-size: 1.3em;
    }
  }
  .contact-right {
    margin-left: 40px;
    form {
      display: flex;
      flex-direction: column;
      input,
      textarea {
        margin-bottom: 6px;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
      input {
        height: 35px;
      }
      textarea {
        height: 130px;
      }
      input[type="submit"] {
        width: 66px;
        height: 35px;
        background-color: rgba(255, 242, 0, 1);
        color: #3b3a3a;
        &:hover {
          cursor: pointer;
          background-color: #d6cc15;
          box-shadow: none;
        }
      }
      input::placeholder,
      textarea::placeholder {
        padding-left: 5px;
      }
    }
  }
}
</style>


