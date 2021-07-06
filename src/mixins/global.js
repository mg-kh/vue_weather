export default {
  data() {
    return {};
  },
  computed: {
    modal() {
      return this.$store.state.modalStatus;
    },
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
  methods: {
    toggleModal() {
      this.$store.commit("toggleModal");
    },
    themeSwitch() {
      this.$store.commit("themeSwitch");
    },
  },
};
