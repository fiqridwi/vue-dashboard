<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Name Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          filterable: true,
          value: "name",
        },
        { text: "Roles", value: "roles" },
        { text: "Status", value: "status" },
      ],
      desserts: [
        {
          name: "Wahyu",
          roles: "admin",
          status: "inactive",
        },
        {
          name: "Andy",
          roles: "admin",
          status: "inactive",
        },
        {
          name: "Joe",
          roles: "admin",
          status: "inactive",
        },
        {
          name: "Luke",
          roles: "admin",
          status: "inactive",
        },
        {
          name: "Neil",
          roles: "admin",
          status: "inactive",
        },
      ],
    };
  },
};
</script>
