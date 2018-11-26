<template>
  <section id="contact">
    <h1>Contact Section</h1>

    <div class="contact-container">
      <section class="contact-left">
        <h1>here the Google Map goes</h1>

        <h2>Besuchen Sie uns!</h2>

        <h3>Besuchen Sie uns!</h3>

        <p>Montag bis Donnerstag: 9:00-17:00 Uhr</p>
        <p>Freitag: 9:00-14:00 Uhr</p>

        <div class="adress">
          <p>Trendhaus-Gruppe</p>
          <p>Biberhaufenweg 10/1/7</p>
          <p>1220 Wien</p>
          <p>Österreich</p>
        </div>

        <div class="tel-fax-email">
          <p>Telefon: +43 1 26 36 770</p>
          <p>Fax: +43 1 23 61 771</p>
          <p>Email: office@trendhaus.eu</p>
        </div>
      </section>

      <section class="contact-right">
        <h1>Wir freuen uns auf Ihre Anfrage!</h1>

        <p>Bitte schreiben Sie uns Ihre Nachricht in das Kontaktformular</p>
        <p>oder rufen Sie uns an.</p>
        <p>Wir melden uns so schnell wie möglich bei Ihnen.</p>

        <form action>
          <input type="text" name="name" placeholder="Name" required>
          
          <input type="email" name="email" placeholder="Email Adresse" required>
          
          <input type="text" name="subject" placeholder="Betreff" required>
          
          <textarea type="text" name="message" placeholder="Nachricht"></textarea>
          
          <input type="submit" value="Senden">
        </form>
      </section>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#contact {
  h1 {
    text-align: center;
    margin: 8%;
    font-size: 2em;
  }
  .contact-container {
    display: flex;
    justify-content: space-around;
  }
  .contact-left {
    .adress {
      margin: 10% 0;
      line-height: 50%;
    }
    .tel-fax-email {
      margin: 10% 0;
      line-height: 50%;
    }
  }
  .contact-right{
    form{
      display: flex;
      flex-direction: column;
      input, textarea{
        margin-bottom: 6px;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
      input{
        height: 35px;
      }
      textarea{
        height: 130px;
      }
      input[type="submit"]{
        width: 66px;
        height: 35px;
        background-color: rgba(255, 242, 0, 1);
        color: #3B3A3A;
      }
    }
  }
}
</style>


