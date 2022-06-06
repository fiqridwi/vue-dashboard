<template>
  <v-app>
    <v-row>
      <v-col cols="2">
        <DashboardMain />
      </v-col>
      <v-col cols="10">
        <v-row>
          <v-col cols="12">
            <NavbarMain />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12 ">
            <router-view />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import DashboardMain from "../components/Dashboard/DashboardMain.vue";
import NavbarMain from "@/components/Navbar/NavbarMain.vue";
export default {
  components: {
    DashboardMain,
    NavbarMain,
  },
};
</script>
