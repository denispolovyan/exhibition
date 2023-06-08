<template>
  <div class="exhibition-app">
    <div class="exhibition-app__body">
      <header-navbar />
      <red-line/>
      <current-event />
      <white-line />
      <about-exhibition />
      <white-line />
      <fasiya-goal />
      <pictures-carousel />
      <charitable-donations />
      <white-line />
      <frequently-asked-questions />
      <red-line />
      <footer-navbar />
    </div>
  </div>
</template>

<script>
import HeaderNavbar from "./HeaderNavbar";
import CurrentEvent from "./CurrentEvent";
import AboutExhibition from "./AboutExhibition";
import PicturesCarousel from "./PicturesCarousel";
import FooterNavbar from "./FooterNavbar";
import FasiyaGoal from "./FasiyaGoal";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import CharitableDonations from "./CharitableDonations";
import RedLine from "./RedLine";
import WhiteLine from "./WhiteLine";

export default {
  components: {
    HeaderNavbar,
    CurrentEvent,
    AboutExhibition,
    PicturesCarousel,
    FooterNavbar,
    FasiyaGoal,
    FrequentlyAskedQuestions,
     CharitableDonations,
    RedLine,
    WhiteLine,
  },
};
</script>

<style>
@import url("../assets/css/nullstyle.css");
</style>
