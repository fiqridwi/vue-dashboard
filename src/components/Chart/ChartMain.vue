<template>
  <v-card class="mx-auto" width="800">
    <apexchart
      width="800"
      height="500"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </v-card>
</template>
<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: ["3", "XL", "Maret", "Indosat", "Smartfren", "Telkomsel"],
        },
      },
      series: [
        {
          name: "Avg",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
        {
          name: "Min",
          data: [90, 80, 75, 60, 49, 40, 30, 21],
        },
        {
          name: "Max",
          data: [90, 80, 75, 60, 49, 40, 30, 21],
        },
      ],
    };
  },
};
</script>
