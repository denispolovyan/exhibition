<template>
  <div class="about-exhibition" id="aboutExhibition">
    <div class="about-exhibition__body">
      <div class="about-exhibition__title">
        <p v-if="$store.getters.getLanguage == 'en'">Who we are</p>
        <p v-if="$store.getters.getLanguage == 'ua'">Хто ми</p>
        <p v-if="$store.getters.getLanguage == 'de'">Wer sind wir</p>
        <div class="about-exhibition__subtitle">
          <span v-if="$store.getters.getLanguage == 'en'">
            Let's get known with each other
          </span>
          <span v-if="$store.getters.getLanguage == 'ua'"
            >Давайте знайомитись з вами</span
          >
          <span v-if="$store.getters.getLanguage == 'de'">
            Lass uns einander kennenlernen
          </span>
        </div>
        <div class="about-exhibition__img">
          <img src="../assets/img/sign.png" alt="fasiya-sign" />
        </div>
      </div>
      <div class="about-exhibition__text">
        <p v-if="$store.getters.getLanguage == 'en'">
          We are the team from Ukraine and we are here to show you that there
          are much more beauty in Ukraine than you think. Have you ever tried
          ukrainian food? Well, how many ukrainian artists do you know? Mm..
          what about ukrainian parties? Films? History? Lifestyle?
        </p>
        <p v-if="$store.getters.getLanguage == 'en'">
          We can show you all of it! And our goal is to protect the beauty and
          diversity of our country and show it to the world, while russia is
          trying to erase it. Save the dates of our events to get deet into
          ukrainian culture!
        </p>
        <p v-if="$store.getters.getLanguage == 'ua'">
          Ми команда з України і ми тут, щоб показати вам наскільки українська
          культура неймовірна. Ви колись куштували українську їжу? Добре, як
          багато українських артистів ви знаєте? Чи ви чули про українські
          вечірки? Фільми? Історію? Спосіб життя?
        </p>
        <p v-if="$store.getters.getLanguage == 'ua'">
          Ми можемо показати вам все це! І наша мета захистити красу й
          різноманіття нашої країни та показати це всьому світові, поки росія
          намагається стрерти все, що ми любимо. Зберігайте дати нашого івенту
          щоб поринути в українську культуру!
        </p>
        <p v-if="$store.getters.getLanguage == 'de'">
          Wir sind das Team aus der Ukraine und wir sind hier, um Ihnen zu
          zeigen, dass es in der Ukraine viel mehr Schönheit gibt, als Sie
          denken. Haben Sie schon einmal ukrainisches Essen probiert? Nun, wie
          viele ukrainische Künstler kennen Sie? Mm.. was ist mit ukrainischen
          Parteien? Filme? Geschichte? Leben?
        </p>
        <p v-if="$store.getters.getLanguage == 'de'">
          Wir können Ihnen alles zeigen! Und unser Ziel ist, die Schönheit und
          Vielfalt unseres Landes zu schützen und es der Welt zu zeigen, während
          Russland versucht, es zu zerstören. Speichern Sie die Termine unserer
          Veranstaltungen, um sich in die ukrainische Kultur einzutauchen!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-exhibition {
  background-color: #141414;
  color: #fff;
  font-family: "KyivTypeTitling";
}
.about-exhibition__body {
  max-width: 1040px;
  padding: 60px 20px 60px 20px;
  margin: 0px auto;
  display: flex;
  text-align: left;
  position: relative;
}
.about-exhibition__title {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 60px;
  font-size: 40px;
  flex: 0 1 50%;
}
.about-exhibition__title p {
  width: 350px;
  text-align: center;
  padding: 20px 40px;
}
.about-exhibition__title p:hover {
  transition-duration: 0.4s;
  color: red;
}
.about-exhibition__img {
  top: 200px;
  left: -80px;
  position: absolute;
  text-align: right;
}
.about-exhibition__img img {
  width: 300px;
}
.about-exhibition__subtitle {
  font-family: "KyivTypeSerif";
  letter-spacing: 1px;
  width: 350px;
  text-align: center;
  font-size: 20px;
  white-space: nowrap;
}
.about-exhibition__subtitle:hover {
  transition-duration: 0.4s;
  color: red;
}
.about-exhibition__text {
  font-family: "KyivTypeSans";
  padding-right: 60px;
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 18px;
  line-height: 35px;
}
.about-exhibition__text p:hover {
  transition-duration: 0.4s;
  color: red;
}

@media (max-width: 1500px) {
  .about-exhibition__img {
    left: -30px;
    position: absolute;
  }
}
@media (max-width: 1050px) {
  .about-exhibition__title {
    padding-right: 60px;
    flex: 0 1 50%;
  }
  .about-exhibition__text {
    padding-right: 60px;
  }
  .about-exhibition__img {
    top: 80px;
    opacity: 0.3;
    position: absolute;
  }
  .about-exhibition__img img {
    width: 450px;
  }
}
@media (max-width: 850px) {
  .about-exhibition__body {
    flex-direction: column;
    gap: 25px;
  }
  .about-exhibition__title p {
    text-align: left;
    padding: 0px;
  }
  .about-exhibition__text {
    flex: 0 1 auto;
    gap: 10px;
    font-size: 16px;
    padding-right: 0px;
    width: 70%;
  }
  .about-exhibition__title p {
    width: 70%;
  }
  .about-exhibition__subtitle {
    text-align: left;
  }
  .about-exhibition__img {
    top: calc(50% + 20px);
    left: 50%;
    right: 200px;
    transform: translate(-50%, -50%);
  }
  .about-exhibition__img img {
    height: 100%;
  }
}
@media (max-width: 800px) {
  .about-exhibition__img {
    bottom: 50px;
    left: 47%;
    transform: translate(0, 0);
  }
  /* .about-exhibition__img img {
    width: 300px;
    height: auto;
  } */
  .about-exhibition__img img {
    display: none;
  }
}
@media (max-width: 650px) {
  .about-exhibition__text {
    width: 90%;
  }
  .about-exhibition__title p {
    width: 90%;
  }
}

@media (max-width: 600px) {
  .about-exhibition__img {
    top: 300px;
    right: 0px;
    left: 0px;
    transform: translate(0, 0);
  }
  /* .about-exhibition__img img {
    height: auto;
  } */
}
@media (max-width: 550px) {
  .about-exhibition__body {
    gap: 25px;
  }
  .about-exhibition__text {
    flex: 0 1 auto;
    gap: 10px;
    font-size: 16px;
  }
}
@media (max-width: 450px) {
  .about-exhibition__title p {
    width: 97%;
  }
  .about-exhibition__text {
    flex: 0 1 auto;
    gap: 10px;
    font-size: 16px;
    font-size: 16px;
    line-height: 30px;
    width: 97%;
  }
  .about-exhibition__subtitle {
    width: auto;
    font-size: 18px;
  }
}
</style>
