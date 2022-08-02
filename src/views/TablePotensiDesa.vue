<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="dataPotensi" :search="search">
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      loading: true,
      firstLoad: true,
      headers: [
        {
          text: "ID",
          value: "object_id",
        },
        {
          text: "Province",
          align: "start",
          filterable: true,
          value: "province.name",
        },
        { text: "City", value: "city.name" },
        { text: "District", value: "district.name" },
        { text: "Sub District", value: "sub_district.name" },
        { text: "Created at", value: "created_at" },
        { text: "Updated at", value: "updated_at" },
        { text: "Updated by", value: "updated_by" },
      ],

      dataPotensi: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    serveHeaders() {
      this.dataPotensi.forEach((item) => {
        for (let [key, value] of Object.entries(item.data)) {
          this.headers.push({ text: value.name, value: `data.${key}.value` });
        }
      });
    },
    getData() {
      fetch(
        "https://1f42c6f0-9384-422d-9951-34a52a0c4274.mock.pstmn.io/api/potensi_desa?limit=&page=&sort=&filter_category=&filter_province=&filter_province=&filter_city=&filter_district=&filter_sub_district=&fields"
      )
        .then((response) => response.json())
        .then((result) => {
          this.dataPotensi = result.data;
          // console.log(this.dataPotensi);
        })
        .then(() => this.serveHeaders());
    },
  },
};
</script>
