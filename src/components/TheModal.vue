<template>
  <div
    class="modal fade show overflow-hidden"
    id="exampleModalLive"
    tabindex="-1"
    aria-labelledby="exampleModalLiveLabel"
    style="display: block"
    aria-modal="true"
    role="dialog"
    v-if="modal"
    @click="toggleModal"
  >
    <template>
      <div
        class="
          modal-dialog
          h-100
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <div class="modal-content text-center py-5 border-0 rounded-lg">
          <div class="modal-header justify-content-center border-0 mb-4">
            <img
              :src="weatherIcon(weatherData.weather[0].icon)"
              :alt="weatherData.weather[0].description"
            />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5 class="modal-title mb-3 country" id="exampleModalLiveLabel">
              {{ weatherData.name }}
            </h5>
            <p class="text-capitalize">
              {{ weatherData.weather[0].description }}
            </p>
            <p class="temp">{{ weatherData.main.temp }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    weatherData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    weatherIcon(icon) {
      return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: block !important;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background: #0707073b;
  .btn-close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .temp {
    position: relative;
    &::before {
      position: absolute;
      content: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9Ikljb25zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBkPSJNNS41LDJDMy42LDIsMiwzLjYsMiw1LjVTMy42LDksNS41LDlTOSw3LjQsOSw1LjVTNy40LDIsNS41LDJ6IE01LjUsN0M0LjcsNyw0LDYuMyw0LDUuNVM0LjcsNCw1LjUsNFM3LDQuNyw3LDUuNSAgIFM2LjMsNyw1LjUsN3oiLz48cGF0aCBkPSJNMjYuNywyMy4zYy0wLjMtMC4zLTAuOC0wLjQtMS4yLTAuMkMyNC41LDIzLjcsMjMuMiwyNCwyMiwyNGMtNC40LDAtOC0zLjYtOC04czMuNi04LDgtOGMxLjIsMCwyLjUsMC4zLDMuNiwwLjkgICBDMjYsOS4xLDI2LjQsOSwyNi43LDguN2wyLjktMi45QzI5LjksNS41LDMwLDUuMiwzMCw0LjljMC0wLjMtMC4yLTAuNi0wLjUtMC43QzI3LjIsMi44LDI0LjcsMiwyMiwyQzE0LjMsMiw4LDguMyw4LDE2ICAgczYuMywxNCwxNCwxNGMyLjcsMCw1LjItMC44LDcuNS0yLjJjMC4zLTAuMiwwLjQtMC40LDAuNS0wLjdjMC0wLjMtMC4xLTAuNi0wLjMtMC44TDI2LjcsMjMuM3oiLz48L2c+PC9zdmc+");
      width: 42px;
      left: 64%;
      top: 14px;
      transform: translate(-50%, -50%);
    }
  }
  .country {
    position: relative;
    &::before {
      position: absolute;
      content: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZS8+PHBhdGggZD0iTTEyLDJhOCw4LDAsMCwwLTgsOGMwLDUuMzQsNi4xNSwxMiw4LDEyczgtNi42Niw4LTEyQTgsOCwwLDAsMCwxMiwyWm0wLDEyYTQsNCwwLDEsMSw0LTRBNCw0LDAsMCwxLDEyLDE0WiIgZmlsbD0iIzQ2NDY0NiIvPjwvc3ZnPg==");
      width: 132px;
      transform: translate(-50%, -50%);
      top: 30px;
      left: 50%;
      opacity: 0.05;
    }
  }
  .modal-content {
    position: relative;
    max-width: 350px;
  }
}
</style>
