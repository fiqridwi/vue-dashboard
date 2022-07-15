<template>
  <v-container class="text-center my-15">
    <h1>Dashboard App</h1>
    <TextContainer />
    <div class="mx-auto">
      <v-btn
        elevation="2"
        color="yellow"
        :to="`/${$i18n.locale}/dashboard/table`"
        >{{ $t("home") }}</v-btn
      >
    </div>
  </v-container>
</template>

<script>
import TextContainer from "@/components/TextContainer.vue";
export default {
  components: {
    TextContainer,
  },
  methods: {
    mounted() {
      console.log("test");
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 4rem;
}
</style>
