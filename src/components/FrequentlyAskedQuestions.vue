<template>
  <div class="frequently-asked-questions" id="frequentlyAskedQuestions">
    <div class="frequently-asked-questions__body">
      <div class="frequently-asked-questions__title"><p>FAQ</p></div>
      <div class="frequently-asked-questions__rows">
        <div
          class="frequently-asked-questions__row"
          :class="{
            selectedQuestion: showList['seventh'],
          }"
        >
          <div
            class="frequently-asked-questions__question"
            @click="showItem('seventh')"
          >
            <p v-if="$store.getters.getLanguage == 'en'">
              Who are the organizers?
            </p>
            <p v-if="$store.getters.getLanguage == 'ua'">Хто організатори?</p>
            <p v-if="$store.getters.getLanguage == 'de'">
              Wer sind die Veranstalter??
            </p>
          </div>
          <div
            v-if="showList.seventh"
            class="frequently-asked-question__answer"
          >
            <div class="pictures-carousel">
              <swiper
                :navigation="{
                  prevEl: prev,
                  nextEl: next,
                }"
                :modules="modules"
                :slides-per-view="previewSlide"
                :space-between="0"
              >
                <swiper-slide class="pictures-carousel__slider"
                  ><img
                    class="image"
                    src="../assets/img/organizers/alex.jpg"
                    alt="alex"
                /></swiper-slide>
                <swiper-slide class="pictures-carousel__slider"
                  ><img
                    class="image"
                    src="../assets/img/organizers/sasha.jpg"
                    alt="sasha"
                /></swiper-slide>
                <swiper-slide class="pictures-carousel__slider"
                  ><img
                    class="image"
                    src="../assets/img/organizers/illia.jpg"
                    alt="illia"
                /></swiper-slide>
                ...
              </swiper>
              <div ref="next" class="swiper-button-next">
                <img
                  class="arrow arrow-right"
                  src="../assets/img/arrows/arrowRight.png"
                  alt="arrow-right"
                />
              </div>
              <div ref="prev" class="swiper-button-prev">
                <img
                  class="arrow arrow-left"
                  src="../assets/img/arrows/arrowRight.png"
                  alt="arrow-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="frequently-asked-questions__row"
          :class="{
            selectedQuestion: showList['fifth'],
          }"
        >
          <div
            class="frequently-asked-questions__question"
            @click="showItem('fifth')"
          >
            <p v-if="$store.getters.getLanguage == 'en'">What is FASIYA?</p>
            <p v-if="$store.getters.getLanguage == 'ua'">Що таке FASIYA</p>
            <p v-if="$store.getters.getLanguage == 'de'">Was sit FASIYA?</p>
          </div>
          <div v-if="showList.fifth" class="frequently-asked-question__answer">
            <p v-if="$store.getters.getLanguage == 'en'">
              In the Western Ukrainian dialect, "fasiya" means rage. This is
              what our team and all of the Ukrainians feel now. That is why such
              a name was chosen — to show not only our culture, but also our
              feelings.
            </p>
            <p v-if="$store.getters.getLanguage == 'ua'">
              З лемківської говірки «фасія» — це лють. Це те, що відчуває наша
              команда і всі українці зараз. Саме тому було обрано таку назву,
              щоб показати не лише нашу культуру, а й наші почуття.
            </p>
            <p v-if="$store.getters.getLanguage == 'de'">
              Im westukrainischen Dialekt bedeutet „fasiya“ Wut. Das ist es, was
              unsere Team und alle Ukrainer jetzt fühlen. Deshalb wurde dieser
              Name gewählt – um nicht nur unsere Kultur, sondern auch unsere
              Gefühle zu zeigen.
            </p>
          </div>
        </div>
        <div
          class="frequently-asked-questions__row"
          :class="{
            selectedQuestion: showList['first'],
          }"
        >
          <div
            class="frequently-asked-questions__question"
            @click="showItem('first')"
          >
            <p v-if="$store.getters.getLanguage == 'en'">
              Is the exhibition free?
            </p>
            <p v-if="$store.getters.getLanguage == 'ua'">
              Виставка безкоштовна?
            </p>
            <p v-if="$store.getters.getLanguage == 'de'">
              Ist die Ausstellung kostenlos?
            </p>
          </div>
          <div v-if="showList.first" class="frequently-asked-question__answer">
            <p v-if="$store.getters.getLanguage == 'en'">
              Yes, this is a charity exhibition, aimed at spreading Ukrainian
              culture.
            </p>
            <p v-if="$store.getters.getLanguage == 'ua'">
              Так, виставка повністю безкоштовна, спрямована на підтримку ЗСУ.
            </p>
            <p v-if="$store.getters.getLanguage == 'de'">
              Ja, dies ist eine Wohltätigkeitsausstellung, deren Ziel die
              Verbreitung der ukrainischen Kultur ist.
            </p>
          </div>
        </div>
        <div
          class="frequently-asked-questions__row"
          :class="{
            selectedQuestion: showList['second'],
          }"
        >
          <div
            class="frequently-asked-questions__question"
            @click="showItem('second')"
          >
            <p v-if="$store.getters.getLanguage == 'en'">
              Which artists will be exhibited?
            </p>
            <p v-if="$store.getters.getLanguage == 'ua'">
              Які художники виставлятимуться?
            </p>
            <p v-if="$store.getters.getLanguage == 'de'">
              Welche Künstler ausgestellt werden?
            </p>
          </div>
          <div v-if="showList.second" class="frequently-asked-question__answer">
            <p v-if="$store.getters.getLanguage == 'en'">
              All of the paintings are made exclusively by Ukrainian artists who
              expressed their desire to participate in the exhibition on a
              volunteer basis.
            </p>
            <p v-if="$store.getters.getLanguage == 'ua'">
              Усі художники— виключно українські митці, які проявили бажання
              взяти участь у виставці на волонтерських засадах.
            </p>
            <p v-if="$store.getters.getLanguage == 'de'">
              Alle Gemälde wurden ausschließlich von ukrainischen Künstlern
              angefertigt, die ihren Wunsch geäußert haben, ehrenamtlich an der
              Ausstellung teilzunehmen.
            </p>
          </div>
        </div>
        <div
          class="frequently-asked-questions__row"
          :class="{
            selectedQuestion: showList['third'],
          }"
        >
          <div
            class="frequently-asked-questions__question"
            @click="showItem('third')"
          >
            <p v-if="$store.getters.getLanguage == 'en'">
              Where will the money from my donations go?
            </p>
            <p v-if="$store.getters.getLanguage == 'ua'">
              Куди підуть гроші з моїх донатів?
            </p>
            <p v-if="$store.getters.getLanguage == 'de'">
              Wohin wurde das Geld meiner Spenden gehen?
            </p>
          </div>
          <div v-if="showList.third" class="frequently-asked-question__answer">
            <p v-if="$store.getters.getLanguage == 'en'">
              Your donations will be directed to support the Armed Forces of
              Ukraine. We share a common goal - to help those who need it the
              most now, using our collective actions and talents.
            </p>
            <p v-if="$store.getters.getLanguage == 'ua'">
              Ваші донати будуть спрямовані на підтримку ЗСУ. Ми поділяємо
              спільну мету – надати допомогу тим, хто зараз її вкрай потребує,
              використовуючи наші спільні дії та таланти.
            </p>
            <p v-if="$store.getters.getLanguage == 'de'">
              Ihre Spenden werden zur Unterstützung der Streitkräfte der Ukraine
              verwendet. Wir haben ein gemeinsames Ziel: Mit unserem gemeinsamen
              Handeln und unseren Talenten denen zu helfen, die es jetzt am
              meisten brauchen.
            </p>
          </div>
        </div>
        <div
          class="frequently-asked-questions__row"
          :class="{
            selectedQuestion: showList['fourth'],
          }"
        >
          <div
            class="frequently-asked-questions__question"
            @click="showItem('fourth')"
          >
            <p v-if="$store.getters.getLanguage == 'en'">
              Where the event will?
            </p>
            <p v-if="$store.getters.getLanguage == 'ua'">
              Де відбудеться виставка?
            </p>
            <p v-if="$store.getters.getLanguage == 'de'">
              Wo wurde die Ausstellung sein?
            </p>
          </div>
          <div v-if="showList.fourth" class="frequently-asked-question__answer">
            <p>
              Fachhochschule Kiel <br />University of Applied Sciences
              <br />Sokratesplatz 1 <br />24149 Kiel
            </p>
          </div>
        </div>
        <div
          class="frequently-asked-questions__row"
          :class="{
            selectedQuestion: showList['sixth'],
          }"
        >
          <div
            class="frequently-asked-questions__question"
            @click="showItem('sixth')"
          >
            <p v-if="$store.getters.getLanguage == 'en'">
              How to buy a painting?
            </p>
            <p v-if="$store.getters.getLanguage == 'ua'">Як купити картину?</p>
            <p v-if="$store.getters.getLanguage == 'de'">
              Wie kann ich Bilder kaufen?
            </p>
          </div>
          <div v-if="showList.sixth" class="frequently-asked-question__answer">
            <p v-if="$store.getters.getLanguage == 'de'">
              Eine Möglichkeit besteht darin, das von der Ausstellungsleitung
              bereitgestellte Formular auszufüllen. Dieses Formular enthält in
              der Regel wichtige Angaben wie Ihren Namen, Ihre
              Kontaktinformationen und die Nummer des Gemäldes, das Sie kaufen
              möchten. Die nächste Möglichkeit besteht darin, Ihre Absicht zum
              Kauf eines Gemäldes mitzuteilen, indem Sie eine E-Mail senden, in
              der Sie angeben, dass Sie an einem bestimmten Gemälde interessiert
              sind. Bereitstellung Ihrer Kontaktdaten und ggf. weiterer von den
              Messeveranstaltern benötigter Informationen. Die Administratoren
              werden auf Ihre E-Mail mit weiteren Anweisungen zum Abschluss
              Ihres Kaufs antworten.
            </p>
            <p v-if="$store.getters.getLanguage == 'ua'">
              Один із варіантів – заповнити форму, надану адміністратором
              виставки. Ця форма зазвичай містить такі важливі деталі, як ваше
              ім’я, контактна інформація та номер картини, яку ви бажаєте
              придбати. <br />
              Наступний варіант – повідомити про намір придбати картину,
              надіславши електронний лист, вказавши, що вас цікавить певна
              картина, надати свої контактні дані та будь-яку додаткову
              інформацію, яку вимагають організатори виставки. Адміністратори
              дадуть відповідь на ваш електронний лист із подальшими
              інструкціями щодо здійснення покупки.
            </p>
            <p v-if="$store.getters.getLanguage == 'en'">
              One of the options is to fill in the form, provided by the
              exhibition administrator. This form usually contains such
              important details as your name, contact information and number of
              paintings you want to purchase. <br />
              The other option is to notify us about your intention to purchase
              a painting by sending an email. This email should state that you
              are interested in a particular painting and contain your contact
              details and any additional information , required by the
              exhibition organizers. Administrators will reply to your email
              with further instructions on how to complete your purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import { ref } from "vue";

export default {
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
      prev,
      next,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => {
    return {
      selectedQuestion: "",
      selectedQuestionCounter: 1,
      showList: {
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        sixth: false,
        seventh: false,
      },
    };
  },
  methods: {
    showItem(id) {
      for (let value in this.showList) {
        this.showList[value] = false;
      }

      if (id == this.selectedQuestion && this.selectedQuestionCounter == 1) {
        this.selectedQuestionCounter++;
        return;
      } else {
        this.selectedQuestionCounter = 1;
        this.showList[id] = true;
        this.selectedQuestion = id;
      }
    },
  },
};
</script>

<style scoped>
.frequently-asked-questions {
  background-color: #141414;
  color: #fff;
  font-family: "KyivTypeTitling";
  font-size: 22px;
}
.frequently-asked-questions__body {
  padding: 60px 20px 60px 20px;
  display: flex;
  max-width: 1040px;
  margin: 0px auto;
}
.frequently-asked-questions__title {
  flex: 1 1 auto;
}
.frequently-asked-questions__title p {
  font-size: 40px;
  max-width: 350px;
  text-align: center;
  padding: 20px 40px;
}
.frequently-asked-questions__title p:hover {
  color: red;
  transition-duration: 0.4s;
}
.frequently-asked-questions__rows {
  font-family: "KyivTypeSans";

  display: flex;
  justify-content: end;
  flex: 0 0 50%;
  flex-direction: column;
  gap: 40px;
}
.frequently-asked-questions__row {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
}
.frequently-asked-questions__row:hover {
  transition-duration: 0.4s;
  border-bottom: 1px solid red;
  color: red;
}
.frequently-asked-questions__question {
  cursor: pointer;
}
.frequently-asked-question__answer {
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.1em;
}

.selectedQuestion {
  border-bottom: 1px solid red;
  color: red;
}

.pictures-carousel {
  width: 500px;
  position: relative;
}
.pictures-carousel__slider {
  text-align: center;
}
.pictures-carousel__slider img {
  object-fit: cover;
  width: 370px;
  height: 370px;
}
.arrow {
  opacity: 0.7;
  z-index: 50;
  top: 50%;
  width: 40px;
  position: absolute;
}
.arrow-right {
  right: 10px;
}
.arrow-left {
  left: 10px;
  transform: rotate(180deg);
}
@media (max-width: 850px) {
  .frequently-asked-questions__body {
    flex-direction: column;
    gap: 25px;
  }
  .frequently-asked-questions__title p {
    text-align: left;
    margin: 0px;
    padding: 0px 0px 20px 0px;
  }
  .frequently-asked-questions__rows {
    display: flex;
    justify-content: end;
    width: 70%;
    flex-direction: column;
    gap: 40px;
  }
  .frequently-asked-questions__row {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #fff;
  }
  .pictures-carousel {
    width: 100%;
    position: relative;
  }
  .pictures-carousel__slider img {
    max-width: 50vw;
    max-height: 50vw;
  }
}
@media (max-width: 650px) {
  .frequently-asked-questions__rows {
    width: 90%;
  }
}
@media (max-width: 550px) {
  .frequently-asked-questions__title p {
    font-size: 30px;
  }
}
@media (max-width: 500px) {
  .pictures-carousel {
    width: 100%;
    position: relative;
  }
  .pictures-carousel__slider img {
    max-width: 50vw;
    max-height: 50vw;
  }
}
</style>
