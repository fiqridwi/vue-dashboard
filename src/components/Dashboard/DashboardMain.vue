<template>
  <v-card class="nav" rounded="false">
    <v-navigation-drawer fixed color="purple darken-2">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon color="white">mdi-flash-outline</v-icon>
        </v-list-item-avatar>

        <v-list-item-title><h3>Admin</h3></v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <a class="et" :href="item.link">{{ item.title }}</a>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Table", link: "table", icon: "mdi-table" },
        { title: "Chart", link: "chart", icon: "mdi-poll" },
        { title: "Map", link: "map", icon: "mdi-map" },
        { title: "Users", link: "users", icon: "mdi-account-group-outline" },
      ],
      mini: true,
    };
  },
};
</script>

<style scoped>
.nav {
  height: 100vh;
  background-color: #1e1e2d;
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: black;
}
h3 {
  color: white;
}
.et {
  color: white;
}
</style>
