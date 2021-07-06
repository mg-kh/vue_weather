<template>
  <div class="container">
    <div class="overlay"></div>

    <h1 class="text-center pt-5">Explore Weather Data Around The Wrold!</h1>

    <div class="spacer my-5"></div>

    <div class="map__container">
      <the-modal :weatherData="weatherData"></the-modal>
      <world-map @show-popup="showPopup"> </world-map>
    </div>
  </div>
</template>

<script>
import WorldMap from "@/components/WorldMap";
import TheModal from "@/components/TheModal";

export default {
  components: { WorldMap, TheModal },
  data() {
    return {
      weatherData: {},
    };
  },
  methods: {
    showPopup(data) {
      this.weatherData = data;
      this.toggleModal();
    },
  },
};
</script>
