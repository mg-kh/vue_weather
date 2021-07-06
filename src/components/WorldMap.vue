<template>
  <section>
    <highcharts
      :constructorType="'mapChart'"
      :options="chartOptions"
      ref="chart"
    >
    </highcharts>
  </section>
</template>

<script>
import Maps from "highcharts/modules/map";
import Highcharts from "highcharts";
import mapData from "@highcharts/map-collection/custom/world.geo.json";
import { weather } from "@/api-services/index";

Maps(Highcharts);

export default {
  name: "Home",
  data() {
    return {
      chartOptions: {
        chart: {
          map: mapData,
          backgroundColor: "transparent",
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        tooltip: {
          style: {
            fontSize: "17px",
          },
          className: "mapTooltip",
          useHTML: true,
          padding: 15,
          formatter() {
            return this.point.name;
          },
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: "spacingBox",
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            type: "map",
            nullInteraction: true,
            states: {
              hover: {
                color: "#0d6efd40",
              },
            },
            dataLabels: {
              enabled: false,
              format: "{point.name}",
            },
            allAreas: true,
            events: {
              click: (e) => {
                const country = e.point.name;
                this.fetchWeatherData(country, e);
              },
            },
          },
        ],
      },
      loadingModal: false,
    };
  },
  methods: {
    async fetchWeatherData(country, e) {
      this.loadingModal = true;
      e.target.style.cursor = "wait";
      try {
        const { data } = await weather.get(country);
        this.loadingModal = false;
        this.weatherData = data;
        this.$emit("show-popup", data);
        e.target.style.cursor = "pointer";
      } catch (error) {
        var { message } = error.response.data;
        e.target.style.cursor = "pointer";
        alert(message);
      }
    },
  },
};
</script>
