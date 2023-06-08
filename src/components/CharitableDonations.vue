<template>
  <div class="charitable-donations" id="charitableDonations">
    <div class="charitable-donations__body">
      <div class="charitable-donatuons__input">
        <input placeholder="10, 20, 30, 50$" type="text" />
      </div>
      <div class="charitable-donations__donate">
        <a target="»_blank»" href="https://savelife.in.ua/DONATE/"
          ><button v-if="$store.getters.getLanguage == 'ua'">Задонатити</button>
          <button v-if="$store.getters.getLanguage == 'en'">Donate</button>
          <button v-if="$store.getters.getLanguage == 'de'">Spenden</button></a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.charitable-donations {
  background-color: #141414;
  color: #fff;
  font-family: "KyivTypeSans";
  text-transform: uppercase;
}
.charitable-donations__body {
  max-width: 660px;
  padding: 150px 20px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 40px;
}
.charitable-donations__title {
  font-size: 20px;
}
.charitable-donations__title:hover {
  transition-duration: 0.4s;
  color: red;
}
.charitable-donatuons__input {
  display: flex;
  align-items: center;
}
.charitable-donatuons__input input {
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 25px;
  border: 3px solid #fff;
}
.charitable-donatuons__input input:hover {
  border: 3px solid red;
  transition-duration: 0.4s;
}
.charitable-donations__donate button {
  font-size: 30px;
  text-transform: uppercase;
  width: 100%;
  padding: 10px 0px;
  background-color: #fff;
  color: #ff2400;
}
.charitable-donations__donate button {
  background-color: #ff2400;
  transition-duration: 0.4s;
  color: #000;
}
.charitable-donations__donate button:hover {
  background-color: #a30000;
  transition-duration: 0.4s;
  color: #000;
}
.charitable-donations__links {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.charitable-donations__backAlive img {
  max-width: 200px;
}
.charitable-donations__united24 img {
  max-width: 200px;
}
</style>
