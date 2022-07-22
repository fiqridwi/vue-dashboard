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
    <v-data-table :headers="headers" :items="data" :search="search">
      <template v-slot:[`item.object_id`]="{ item }">
        <a :href="item.url">{{ item.object_id }}</a>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import potensiDesa from "../../potensiDesa";
export default {
  data() {
    return {
      search: "",
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
      data: potensiDesa,
    };
  },
  mounted() {
    // console.log(this.data);
    this.serveHeaders();
  },
  methods: {
    serveHeaders() {
      for (let [key, value] of Object.entries(potensiDesa[0].data)) {
        this.headers.push({ text: value.name, value: `data.${key}.value` });
      }

      console.log(this.headers);
    },
  },
};
</script>
