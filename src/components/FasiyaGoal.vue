<template>
  <div class="fasiya-goal">
    <div class="fasiya-goal__body">
      <div class="fasiya-goal__text">
        <p v-if="$store.getters.getLanguage == 'en'">
          To achieve recognition of Ukrainian culture in Germany, to change
          attitudes towards it and Ukraine in general for the better and also to
          contribute to increasing aid from Germany during the war.
        </p>
        <p v-if="$store.getters.getLanguage == 'en'">
          We want to show Ukrainian culture to the Germans and assure that it
          cannot be protected by negotiations. One more our goal is to start a
          movement aimed at changing opinion and attitude of German society
          towards Ukrainian culture.
        </p>
        <p v-if="$store.getters.getLanguage == 'ua'">
          Досягти впізнаваності української культури в Німеччині, змінити
          установки щодо неї та України в цілому на краще, а також посприяти
          збільшенню допомоги від Німеччини у війні.
        </p>
        <p v-if="$store.getters.getLanguage == 'ua'">
          Показати українську культуру німцям та донести, що її не захистити
          переговорами. Започаткувати рух, спрямований на зміну думки та
          відношення німецького суспільства щодо української культури.
        </p>
        <p v-if="$store.getters.getLanguage == 'de'">
          Die Anerkennung der ukrainischen Kultur in Deutschland zu erreichen,
          die Einstellung ihr gegenüber und der Ukraine im Allgemeinen zum
          Besseren zu verändern und auch zur Erhöhung der Hilfe von Deutschland
          beizutragen.
        </p>
        <p v-if="$store.getters.getLanguage == 'de'">
          Wir möchten den Menschen die ukrainische Kultur näher zu Deutschen
          bringen und versichern, dass es nicht sein kann dass es wird durch
          Verhandlungen geschützt. Noch eins von uns Ziel ist es, eine Bewegung
          zu starten, die darauf abzielt, die Meinung und Einstellung der
          Deutsche Gesellschaft gegenüber der ukrainischen Kultur zu ändern.
        </p>
      </div>
      <div class="fasiya-goal__title">
        <p v-if="$store.getters.getLanguage == 'en'">Our goal</p>
        <p v-if="$store.getters.getLanguage == 'ua'">Наша мета</p>
        <p v-if="$store.getters.getLanguage == 'de'">Unser Ziel</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fasiya-goal {
  background-color: #141414;
  color: #fff;
  font-family: "KyivTypeTitling";
}
.fasiya-goal__body {
  max-width: 1040px;
  padding: 60px 20px 60px 20px;
  margin: 0px auto;
  display: flex;
  text-align: left;
}
.fasiya-goal__title {
  display: flex;
  justify-content: end;
  height: 81.78px;
  padding-right: 60px;
  font-size: 40px;
  flex: 0 1 50%;
}
.fasiya-goal__title p {
  text-align: center;
  width: 350px;
  padding: 20px 40px;
}
.fasiya-goal__title p:hover {
  transition-duration: 0.4s;
  color: red;
}
.fasiya-goal__text {
  font-family: "KyivTypeSans";
  padding-right: 60px;
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 18px;
  line-height: 35px;
}
.fasiya-goal__text p:hover {
  transition-duration: 0.4s;
  color: red;
}

@media (max-width: 1050px) {
  .fasiya-goal__title {
    padding-right: 60px;
    flex: 0 1 50%;
  }
  .fasiya-goal__text {
    padding-right: 60px;
  }
}
@media (max-width: 850px) {
  .fasiya-goal__body {
    flex-direction: column;
    gap: 25px;
  }
  .fasiya-goal__title p {
    padding: 0px;
    text-align: right;
  }
  .fasiya-goal__title {
    padding: 0px;
  }
  .fasiya-goal__text {
    order: 2;
    flex: 0 1 100%;
    gap: 10px;
    font-size: 16px;
    padding-right: 0px;
    margin-left: auto;
    width: 70%;
    text-align: right;
  }
}
@media (max-width: 650px) {
  .fasiya-goal__text {
    width: 90%;
  }
  .fasiya-goal__title p {
    width: 90%;
  }
}
@media (max-width: 550px) {
  .fasiya-goal__body {
    gap: 25px;
  }
  .fasiya-goal__title p {
    align-self: center;
  }
  .fasiya-goal__text {
    flex: 0 1 auto;
    gap: 10px;
    font-size: 16px;
  }
}
@media (max-width: 450px) {
  .fasiya-goal__title p {
    width: 97%;
  }
  .fasiya-goal__text {
    flex: 0 1 auto;
    gap: 10px;
    font-size: 16px;
    line-height: 30px;
    width: 97%;
  }
}
</style>
