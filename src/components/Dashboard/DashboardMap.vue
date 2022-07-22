<template>
  <div class="pl-15">
    <h1>Map</h1>
    <mapMain>
      <ul slot="data">
        <li>Map data</li>
        <li>Coordinate</li>
      </ul>
      <div :slot="loading">Content</div>
      <template #test>
        <div>Map layer</div>
      </template>
    </mapMain>
  </div>
</template>

<script>
import mapMain from "../../components/Map/MapMain.vue";
export default {
  data() {
    return {
      loading: "",
    };
  },
  components: {
    mapMain,
  },
  created() {
    setTimeout(() => {
      this.loading = "loading";
    }, 3000);
  },
};
</script>
