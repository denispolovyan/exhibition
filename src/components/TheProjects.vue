<template>
  <div class="the-projects" id="projects">
    <div class="wrapper">
      <div
        class="project__open"
        :class="{
          'border-b': showFasiya,
        }"
      >
        <p>Fasiya</p>
        <p @click="showFasiya ? (showFasiya = false) : (showFasiya = true)">
          <img
            class="project__img"
            src="../assets/img/arrow-down.png"
            alt="arrow-down"
          />
        </p>
      </div>
      <div v-if="showFasiya" class="project-content">
        <fasiya-event />
        <pictures-carousel />
      </div>
    </div>
  </div>
</template>

<script>
import PicturesCarousel from "./PicturesCarousel";
import FasiyaEvent from "./FasiyaEvent";

export default {
  components: {
    PicturesCarousel,
    FasiyaEvent,
  },
  data: () => {
    return {
      showFasiya: false,
    };
  },
};
</script>

<style scoped>
.the-projects {
  color: #fff;
  font-family: "KyivTypeTitling";
  background-color: #141414;
}
.project__open {
  display: flex;
  justify-content: space-between;
  max-width: 1040px;
  margin: 0px auto;
  padding: 60px 20px 60px 20px;
  font-size: 40px;
}
.project__img {
  cursor: pointer;
  height: 48px;
  padding: 13px 5px;
  border-radius: 5px;
  background-color: #fff;
  transition-duration: 1000ms;
}
.project__img:hover {
  background-color: #6f6e6e;
}
.wrapper {
  border-top: 1px solid red;
  border-bottom: 1px solid red;
}
.project-content {
  padding-bottom: 40px;
}
.border-b {
  border-bottom: 1px solid red;
}
</style>
