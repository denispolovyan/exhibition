<template>
  <div class="footer-navbar">
    <div class="footer-navbar__body">
      <div class="footer-navbar__column footer-navbar__column_pictures">
        <img
          class="footer-navbar__image"
          src="../assets/img/logo.png"
          alt="logo"
        />
        <div class="footer-navbar__medias">
          <div class="footer-navbar__media">
            <a
              target="»_blank»"
              href="https://www.instagram.com/fasiya.art/?igshid=YmMyMTA2M2Y%3D"
            >
              <img
                src="../assets/img/medias/free-icon-instagram-2111463.png"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-navbar__column footer-navbar__column_mails">
        <div class="footer-navbar__mails">
          <div>
            <a class="footer-navbar__mail" href="mailto:fasiyaart@gmail.com"
              >fasiyaart@gmail.com</a
            >
          </div>
          <div class="footer-navbar__mail">+49 175 411 1576</div>
        </div>
      </div>
      <div class="footer-navbar__column footer-navbar__column_donate">
        <div class="footer-navbar__donate" v-scroll-to="'#charitableDonations'">
          <p v-if="$store.getters.getLanguage == 'en'">Donate</p>
          <p v-if="$store.getters.getLanguage == 'ua'">Задонатити</p>
          <p v-if="$store.getters.getLanguage == 'de'">spenden</p>
        </div>
        <div class="footer-navbar__arrow">
          <img
            @click="scrollToTop"
            src="../assets/img/arrows/arrow.png"
            alt="arrow"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.footer-navbar {
  background-color: #141414;
  padding: 50px 0px;
  color: #fff;
  font-family: "KyivTypeSans";
  position: relative;
}
.footer-navbar__body {
  display: flex;
  max-width: 1040px;
  justify-content: space-between;
  padding: 0px 20px;
  margin: 0px auto;
}
.footer-navbar__image {
  width: 200px;
  margin-bottom: 35px;
}
.footer-navbar__image:hover {
  transition-duration: 0.4s;
  background-color: red;
}
.footer-navbar__mails {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 10px;
}
.footer-navbar__mail {
  font-size: 20px;
  color: #fff;
}
.footer-navbar__mail:hover {
  transition-duration: 0.4s;
  color: red;
}
.footer-navbar__medias {
  display: flex;
  gap: 25px;
  margin-left: 10px;
}
.footer-navbar__media img {
  width: 30px;
}

.footer-navbar__donate {
  cursor: pointer;
  padding: 14.3px 132.4px;
  border: 1px solid #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.footer-navbar__donate:hover {
  background-color: red;
  border: 1px solid red;
  color: #fff;
  transition-duration: 0.4s;
}
/* arrow  */
.footer-navbar__arrow {
  text-align: right;
}
.footer-navbar__arrow img {
  border-radius: 10px;
  padding: 20px;
  width: 60px;
  border: 1px solid #141414;
}
.footer-navbar__arrow img:hover {
  transition-duration: 0.4s;
  border: 1px solid red;
}

@media (max-width: 900px) {
  .footer-navbar__donate {
    padding: 14.3px 50px;
  }
  .footer-navbar__column_mails {
    margin-top: 5px;
  }
}
@media (max-width: 700px) {
  .footer-navbar__body {
    flex-wrap: wrap;
    flex: 1 1 50%;
    gap: 30px 0px;
  }
  .footer-navbar__column_pictures {
    flex: 0 0 40%;
  }
  .footer-navbar__column_mails {
    text-align: right;
    flex: 0 0 40%;
  }
  .footer-navbar__image {
    width: 250px;
    margin-bottom: 20px;
  }
  .footer-navbar__mails {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .footer-navbar__mail {
    font-size: 20px;
  }
  .footer-navbar__medias {
    display: flex;
    gap: 25px;
  }
  .footer-navbar__donate {
    width: 100%;
    margin-bottom: 0px;
  }

  .footer-navbar__column_donate {
    flex: 1 1 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    gap: 20px;
    text-align: center;
  }
}
@media (max-width: 550px) {
  .footer-navbar__image {
    width: 140px;
    margin-bottom: 20px;
  }
  .footer-navbar__mail {
    font-size: 18px;
  }
  .footer-navbar__column_mails {
    margin-top: 0px;
  }
}
@media (max-width: 450px) {
  .footer-navbar__body {
    flex-wrap: wrap;
    flex-direction: column;
    flex: 1 1 100%;
    gap: 30px 0px;
  }
  .footer-navbar__column_pictures {
    flex: 0 0 100%;
    text-align: center;
  }
  .footer-navbar__column_mails {
    text-align: left;
    flex: 0 0 100%;
  }
  .footer-navbar__column_donate {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0px auto;
  }
  .footer-navbar__image {
    width: 80%;
    margin-bottom: 20px;
  }
  .footer-navbar__mails {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .footer-navbar__mail {
    text-align: center;
    font-size: 24px;
  }
  .footer-navbar__medias {
    display: flex;
    gap: 25px;
    justify-content: center;
  }
  .footer-navbar__media img {
    width: 40px;
  }
}
</style>
