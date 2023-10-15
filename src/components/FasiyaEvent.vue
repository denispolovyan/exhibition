<template>
  <div class="current-event">
    <div class="current-event__body">
      <div class="current-event__date">
        <p v-if="$store.getters.getLanguage == 'en'">29 jun - 11 jul</p>
        <p v-if="$store.getters.getLanguage == 'ua'">29 червня - 11 липня</p>
        <p v-if="$store.getters.getLanguage == 'de'">29 jun - 11 jul</p>
      </div>
      <div class="current-event__name">
        <span v-if="$store.getters.getLanguage == 'en'"
          >Exhibition<br />
          of true<br />
          Ukrainian<br />
          art
        </span>
        <span v-if="$store.getters.getLanguage == 'ua'"
          >Виставка<br />
          українського мистецтва
        </span>
        <span v-if="$store.getters.getLanguage == 'de'"
          >Ausstellung<br />
          der echte<br />
          ukrainische Kunst
        </span>
      </div>
      <div class="current-event__text">
        <span
          ><a target="»_blank»" href="https://goo.gl/maps/epF9mXBhZutv214aA"
            >Fachhochschule Kiel, Schwentinestraße 11, 24149 Kiel
            <img src="../assets/img/dandruff.png" alt="dandruff" /></a
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.current-event {
  background-color: #141414;
  color: #fff;
  font-family: "KyivTypeTitling";
  text-transform: uppercase;
}
.current-event__body {
  max-width: 1040px;
  padding: 100px 20px 110px 20px;
  margin: 0px auto;
}
.current-event__date {
  font-family: "KyivTypeSerif";
  letter-spacing: 1px;
  display: inline-block;
  font-size: 20px;
  margin-bottom: 40px;
}
.current-event__date:hover {
  color: red;
  transition-duration: 0.4s;
}
.current-event__name {
  font-family: "KyivTypeSans";
  font-size: 90px;
  margin-bottom: 40px;
}
.current-event__name span:hover {
  color: red;
  transition-duration: 0.4s;
}
.current-event__text {
  font-family: "KyivTypeSans";
  letter-spacing: 1px;
  font-size: 20px;
  max-width: 600px;
  line-height: 28px;
  text-decoration: none;
}
.current-event__text span a {
  text-decoration: none;
  color: #fff;
}
.current-event__text span a:hover {
  color: red;
  transition-duration: 0.4s;
}
.current-event__text img {
  margin-top: 3px;
  width: 24px;
  background-color: #fff;
  border-radius: 5px;
  padding: 4px;
}
@media (max-width: 850px) {
  .current-event__name {
    font-size: 70px;
    text-align: justify;
  }
}

@media (max-width: 650px) {
  .current-event__name {
    font-size: 60px;
    text-align: justify;
  }
  .current-event__text {
    max-width: 400px;
  }
}
@media (max-width: 550px) {
  .current-event__name {
    font-size: 55px;
  }
}
@media (max-width: 500px) {
  .current-event__name {
    font-size: 43px;
  }
}
@media (max-width: 400px) {
  .current-event__name {
    font-size: 38px;
  }
  .current-event__text {
    font-size: 18px;
    max-width: 600px;
    line-height: 26px;
  }
  .current-event__text img {
    margin-top: 1px;
  }
}
@media (max-width: 360px) {
  .current-event__name {
    font-size: 35px;
  }
}
</style>
