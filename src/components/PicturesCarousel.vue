<template>
  <div class="pictures-carousel">
    <div class="pictures-carousel__body">
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
            src="../assets/img/arts/photo_2023-06-27_20-45-58.jpg"
            alt="painting"
          />
        </swiper-slide>
        <swiper-slide class="pictures-carousel__slider"
          ><img
            class="image"
            src="../assets/img/arts/photo_2023-06-27_20-46-28.jpg"
            alt="painting"
          />
        </swiper-slide>
        <swiper-slide class="pictures-carousel__slider"
          ><img
            class="image"
            src="../assets/img/arts/photo_2023-06-27_20-47-06.jpg"
            alt="painting"
          />
        </swiper-slide>
        <swiper-slide class="pictures-carousel__slider"
          ><img
            class="image"
            src="../assets/img/arts/photo_2023-06-27_20-47-32.jpg"
            alt="painting"
          />
        </swiper-slide>
        <swiper-slide class="pictures-carousel__slider"
          ><img
            class="image"
            src="../assets/img/arts/photo_2023-06-27_20-48-01.jpg"
            alt="painting"
          />
        </swiper-slide>
        <swiper-slide class="pictures-carousel__slider"
          ><img
            class="image"
            src="../assets/img/arts/photo_2023-06-27_20-48-15.jpg"
            alt="painting"
          />
        </swiper-slide>
        <swiper-slide class="pictures-carousel__slider"
          ><img
            class="image"
            src="../assets/img/arts/photo_2023-06-27_20-48-24.jpg"
            alt="painting"
          />
        </swiper-slide>
        <swiper-slide class="pictures-carousel__slider"
          ><img
            class="image"
            src="../assets/img/arts/photo_2023-05-10_16-39-01.jpg"
            alt="painting"
          />
        </swiper-slide>
        <swiper-slide class="pictures-carousel__slider"
          ><img
            class="image"
            src="../assets/img/arts/IMG_7991.jpg"
            alt="painting"
        /></swiper-slide>
        <swiper-slide class="pictures-carousel__slider"
          ><img
            class="image"
            src="../assets/img/arts/photo_2023-05-10_16-39-03.jpg"
            alt="painting"
        /></swiper-slide>
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_7996.jpg"
            alt="painting"
        /></swiper-slide>
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_5782.png"
            alt="painting"
        /></swiper-slide>
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts//IMG_5777.png"
            alt="painting"
        /></swiper-slide>
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_5797.png"
            alt="painting"
        /></swiper-slide>
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_5796.png"
            alt="painting"
        /></swiper-slide>

        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_5810.png"
            alt="painting"
        /></swiper-slide>

        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_5801.png"
            alt="painting"
        /></swiper-slide>

        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_5816.png"
            alt="painting"
        /></swiper-slide>
        <swiper-slide class="pictures-carousel__slider"
          ><img
            class="image"
            src="../assets/img/arts/IMG_6019.jpg"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">Олена Аль-Асаад</div>
          </div>
        </swiper-slide>
        <swiper-slide class="pictures-carousel__slider"
          ><img
            class="image"
            src="../assets/img/arts/IMG_6020.jpg"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">Олена Аль-Асаад</div>
          </div>
        </swiper-slide>
        <swiper-slide class="pictures-carousel__slider"
          ><img
            class="image"
            src="../assets/img/arts/IMG_6021.jpg"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">Олена Аль-Асаад</div>
          </div>
        </swiper-slide>
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_5788.png"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">Олена Аль-Асаад</div>
          </div></swiper-slide
        >
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_6028.png"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">Ольга Бондар</div>
          </div></swiper-slide
        >
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_6027.png"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">Ольга Бондар</div>
          </div></swiper-slide
        >
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_6026.png"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">Ольга Бондар</div>
          </div></swiper-slide
        >
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_6023.jpg"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">Лаура Аль-Асаад</div>
          </div></swiper-slide
        >
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_6025.jpg"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">Лаура Аль-Асаад</div>
          </div></swiper-slide
        >
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_5790.png"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">Лаура Аль-Асаад</div>
          </div></swiper-slide
        >
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_6034.png"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">
              Вікторія Лихольот / Victoria Likhlyot
            </div>
          </div></swiper-slide
        >
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_6029.png"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">
              Вікторія Лихольот / Victoria Likhlyot
            </div>
          </div></swiper-slide
        >
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_6030.png"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">
              Вікторія Лихольот / Victoria Likhlyot
            </div>
          </div></swiper-slide
        >
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_6031.png"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">
              Вікторія Лихольот / Victoria Likhlyot
            </div>
          </div></swiper-slide
        >
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_6032.png"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">
              Вікторія Лихольот / Victoria Likhlyot
            </div>
          </div></swiper-slide
        >
        <swiper-slide class="pictures-carousel__slider">
          <img
            class="image"
            src="../assets/img/arts/IMG_6033.png"
            alt="painting"
          />
          <div class="swiper-author">
            <div class="swiper-author__text">
              Вікторія Лихольот / Victoria Likhlyot
            </div>
          </div></swiper-slide
        >
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
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import { ref } from "vue";

import "swiper/css";
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
      previewSlide: "",
      clientWidth: "",
    };
  },
  methods: {
    getWindowSize() {
      this.clientWidth = window.screen.width;
      this.clientWidth > 2000 ? (this.previewSlide = 9) : null;
      this.clientWidth < 2000 ? (this.previewSlide = 7) : null;
      this.clientWidth < 1750 ? (this.previewSlide = 5) : null;
      this.clientWidth < 1500 ? (this.previewSlide = 3) : null;
      this.clientWidth < 1200 ? (this.previewSlide = 2) : null;
      this.clientWidth < 900 ? (this.previewSlide = 1) : null;
    },
  },
  created() {
    this.getWindowSize();
  },
  mounted() {
    window.removeEventListener("resize", this.getWindowSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.getWindowSize);
  },
};
</script>

<style scoped>
.pictures-carousel {
  position: relative;
  padding: 10px;
}
.pictures-carousel__slider {
  position: relative;
  text-align: center;
}
.pictures-carousel__slider img {
  object-fit: cover;
  width: 250px;
  height: 250px;
}
.image {
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 7px;
}
.swiper-author {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #000;
  opacity: 0.5;
}
.swiper-author__text {
  padding: 5px 10px;
  color: #fff;
  font-weight: 700;
}

@media (min-width: 2000px) {
  .pictures-carousel__slider img {
    object-fit: cover;
    width: 10.5vw;
    height: 10.5vw;
  }
}
@media (max-width: 2000px) {
  .pictures-carousel__slider img {
    object-fit: cover;
    width: 13vw;
    height: 13vw;
  }
}
@media (max-width: 1750px) {
  .pictures-carousel__slider img {
    object-fit: cover;
    width: 19vw;
    height: 19vw;
  }
}
@media (max-width: 1500px) {
  .pictures-carousel__slider img {
    object-fit: cover;
    width: 32vw;
    height: 32vw;
  }
}
@media (max-width: 1200px) {
  .pictures-carousel__slider img {
    object-fit: cover;
    width: 48vw;
    height: 48vw;
  }
}

@media (max-width: 900px) {
  .pictures-carousel__slider img {
    object-fit: cover;
    width: 94vw;
    height: 94vw;
  }
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
</style>
