<template>
  <div class="exhibition-app">
    <div class="exhibition-app__body">
      <header-navbar />
      <red-line />
      <front-page/>
      <white-line />
      <about-exhibition />
      <white-line />
      <fasiya-goal />
      <the-projects />
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
import AboutExhibition from "./AboutExhibition";
import FooterNavbar from "./FooterNavbar";
import FasiyaGoal from "./FasiyaGoal";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import CharitableDonations from "./CharitableDonations";
import RedLine from "./RedLine";
import WhiteLine from "./WhiteLine";
import TheProjects from "./TheProjects";
import FrontPage from "./FrontPage";

export default {
  components: {
    HeaderNavbar,
    AboutExhibition,
    FooterNavbar,
    FasiyaGoal,
    FrequentlyAskedQuestions,
    CharitableDonations,
    RedLine,
    WhiteLine,
    TheProjects,
    FrontPage,
  },
};
</script>

<style>
@import url("../assets/css/nullstyle.css");
</style>
