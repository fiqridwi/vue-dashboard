/* eslint-disable vue/valid-v-slot */
<template>
  <v-card>
    <v-card-title>
      Hacker News
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      :headers="headers"
      :items="storyDetail"
      :search="search"
      class="elevation-1"
      @page-count="pageCount = $event"
      :loading="isLoading"
      loading-text="Loading... Please wait"
    >
      <!-- clickable url     -->
      <template v-slot:[`item.url`]="{ item }">
        <a :href="item.url">{{ item.url }}</a>
      </template>
      <!-- colored score -->
      <template v-slot:[`item.score`]="{ item }">
        <v-chip :color="getColor(item.score)" dark>
          {{ item.score }}
        </v-chip>
      </template>
      <!-- convert unix timestamp -->
      <template v-slot:[`item.time`]="{ item }">
        <p>{{ convertTime(item.time) }}</p>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
      <v-text-field
        :value="itemsPerPage"
        label="Items per page"
        type="number"
        min="-1"
        max="15"
        @input="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      bestStories: [],
      storyDetail: [],
      isLoading: true,
      headers: [
        {
          text: this.$t("table.title"),
          align: "start",
          sortable: true,
          value: "title",
        },
        { text: this.$t("table.score"), value: "score" },
        { text: this.$t("table.author"), value: "by" },
        { text: "URL", value: "url" },
        { text: this.$t("table.created"), value: "time" },
      ],
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
    };
  },
  methods: {
    //get data and limit return to 10
    //store data in variable and iterate to get detail data
    getData() {
      fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      )
        .then((response) => response.json())
        .then((result) => {
          this.bestStories = result.slice(0, 100);
          this.bestStories.forEach(this.getDetailStory);
        });
    },
    //get detail data and set loading to false

    getDetailStory(id) {
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      )
        .then((response) => response.json())
        .then((result) => {
          this.storyDetail.push(result);
          this.isLoading = false;
          console.log(this.storyDetail);
        });
    },
    getColor(score) {
      if (score >= 150) return "green";
      else if (score <= 150 && score >= 100) return "orange";
      else return "red";
    },

    convertTime(unxiTime) {
      const miliseconds = unxiTime * 1000;
      const dateObject = new Date(miliseconds);
      return dateObject.toLocaleDateString();
    },
  },

  created() {
    this.getData();
  },
};
</script>
