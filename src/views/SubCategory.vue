<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col cols="3">
          <v-btn color="primary" @click="addDialog = !addDialog">Add</v-btn>
        </v-col>
      </v-row>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="dataSub" :search="search">
      <template v-slot:[`item.id`]>
        <v-btn color="green" class="mx-2">Edit</v-btn>
        <v-btn color="red">Delete</v-btn>
      </template>
    </v-data-table>

    <!-- Add Dialog -->
    <v-dialog v-model="addDialog" max-width="500px">
      <v-card>
        <p class="text-center text-h5 pa-4">Add Data Sub-Category</p>
        <v-divider></v-divider>
        <div class="pa-5">
          <v-form>
            <div>Name</div>
            <v-text-field placeholder="Name"></v-text-field>
          </v-form>
          <v-form>
            <div>Description</div>
            <v-text-field placeholder="Description"></v-text-field>
          </v-form>
          <v-form>
            <div>Unit</div>
            <v-text-field placeholder="Unit"></v-text-field>
          </v-form>
          <v-form>
            <div>Category</div>
            <v-text-field placeholder="Category"></v-text-field>
          </v-form>
          <v-form>
            <div>Created at</div>
            <v-text-field placeholder="Created at"></v-text-field>
          </v-form>
          <v-row align="center">
            <v-col cols="6" class="justify-center">
              <v-btn color="grey" @click="addDialog = !addDialog">Cance</v-btn>
            </v-col>
            <v-col> <v-btn color="primary" class="">Submit</v-btn></v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import data_sub from "../../data_sub";
export default {
  data() {
    return {
      addDialog: false,
      search: "",
      loading: true,
      firstLoad: true,
      headers: [
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Description",
          value: "description",
        },
        {
          text: "Unit",
          value: "unit",
        },
        {
          text: "Category",
          value: "category.name",
        },
        {
          text: "Created at",
          value: "created_at",
        },
        {
          text: "Updated at",
          value: "updated_at",
        },
        {
          text: "Actions",
          value: "id",
        },
      ],

      dataSub: data_sub.data,
    };
  },
  mounted() {},
  methods: {},
};
</script>
