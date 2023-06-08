<template>
  <div class="header-navbar">
    <div class="header-navbar__body">
      <div class="header-navbar__logo">
        <img
          class="header-navbar__img"
          src="../assets/img/logo.png"
          alt="logo"
        />
      </div>
      <div class="header-navbar__list">
        <div
          class="header-navdar__item header-navbar__about"
          v-scroll-to="{
            el: '#aboutExhibition',
            duration: 800,
          }"
        >
          <p v-if="$store.getters.getLanguage == 'en'">About the project</p>
          <p v-if="$store.getters.getLanguage == 'ua'">Про проєкт</p>
          <p v-if="$store.getters.getLanguage == 'de'">über das Projekt</p>
        </div>
        <div
          class="header-navdar__item header-navbar__questions"
          v-scroll-to="{
            el: '#frequentlyAskedQuestions',
            duration: 800,
          }"
        >
          <p v-if="$store.getters.getLanguage == 'en'">FAQ</p>
          <p v-if="$store.getters.getLanguage == 'ua'">FAQ</p>
          <p v-if="$store.getters.getLanguage == 'de'">FAQ</p>
        </div>
        <div
          class="header-navdar__item button"
          v-scroll-to="{
            el: '#charitableDonations',
            duration: 800,
          }"
        >
          <p v-if="$store.getters.getLanguage == 'en'">Donate</p>
          <p v-if="$store.getters.getLanguage == 'ua'">Задонатити</p>
          <p v-if="$store.getters.getLanguage == 'de'">spenden</p>
        </div>
        <div class="header-navdar__item">
          <select name="lang" class="header-navbar__select" v-model="lang">
            <option class="header-navbar__option" value="en">EN</option>
            <option class="header-navbar__option" value="de">DE</option>
            <option class="header-navbar__option" value="ua">UA</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      lang: "en",
    };
  },
  methods: {},
  watch: {
    lang() {
      this.$store.commit("setLanguage", this.lang);
    },
  },
};
</script>

<style scoped>
.header-navbar {
  background-color: #141414;
  color: #fff;
  font-family: "KyivTypeSans";
  font-size: 22px;
}
.header-navbar__body {
  height: 100px;
  align-items: center;
  display: flex;
  max-width: 1040px;
  padding: 0px 20px;
  margin: 0px auto;
}
.header-navbar__logo {
  flex: 1 1 auto;
}
.header-navbar__img {
  width: 250px;
}
.header-navbar__img:hover {
  transition-duration: 0.4s;
  background-color: red;
}
.header-navbar__list {
  margin-top: 7px;
  display: flex;
  gap: 20px;
}
.header-navdar__item {
  cursor: pointer;
  text-transform: uppercase;
  align-self: center;
}
.header-navdar__item:hover {
  color: red;
  transition-duration: 0.4s;
}
.button {
  padding: 10px 70px;
  border: 1px solid #fff;
  font-weight: 700;
}
.button:hover {
  background-color: red;
  border: 1px solid red;
  color: #fff;
  transition-duration: 0.4s;
}
.header-navbar__select {
  background: #141414;
  color: #fff;
  font-family: "KyivTypeSans";
  font-size: 22px;
}
.header-navbar__option {
  font-size: 14px;
}

@media (max-width: 950px) {
  .header-navbar__questions {
    display: none;
  }
  .header-navbar__about {
    display: none;
  }
  .button {
    padding: 13.5px 55px;
    border: 1px solid #fff;
    font-weight: 700;
  }
}
@media (max-width: 650px) {
  .button {
    padding: 13.5px 0px;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    font-weight: 700;
  }
  .header-navbar__logo {
    flex: 0 0 auto;
  }
  .header-navbar__body {
    gap: 20px;
    justify-content: space-between;
  }
  .header-navbar__list {
    flex: 1 1 auto;
  }
  .header-navbar__img {
    width: 170px;
  }
}
@media (max-width: 500px) {
  .button {
    padding: 6px 0px;
    font-size: 18px;
  }
  .header-navbar__body {
    gap: 0px;
    justify-content: space-between;
  }
  .header-navbar__list {
    flex: 1 1 auto;
    gap: 10px;
  }
  .header-navbar__img {
    width: 120px;
  }
}
@media (max-width: 450px) {
  .header-navbar__body {
    gap: 0px;
  }
  .header-navbar__img {
    flex: 0 0 auto;
  }
  .header-navbar__body {
    height: 80px;
  }
}
@media (max-width: 380px) {
  .header-navbar__body {
    height: 70px;
  }
}
</style>
