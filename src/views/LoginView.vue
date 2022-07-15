<template>
  <v-container class="text-center">
    <v-card width="500" class="mx-auto pa-10 card">
      <v-row>
        <v-col cols="12">
          <p class="text-center text-h4">LOGIN</p>
        </v-col>
      </v-row>
      <v-form ref="input">
        <v-row class="mb-0">
          <v-col>
            <v-text-field
              v-model="userName"
              outlined
              placeholder="Username"
              autocomplete="username"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mt-0">
          <v-col>
            <v-text-field
              v-model="password"
              outlined
              placeholder="Password"
              @click:append="isPasswordShow = !isPasswordShow"
              :append-icon="isPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
              :type="isPasswordShow ? 'text' : 'password'"
              :rules="passwordRule"
              autocomplete="current-password"
              @keyup.enter="handleLogin"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>

      <v-row>
        <v-btn @click="handleLogin">Login</v-btn>
      </v-row>
    </v-card>
    <v-dialog v-model="isDialogShow" width="400" heigh>
      <v-card height="400">
        <p>User unidentified</p>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      passwordRule: [(v) => !!v || "Please input password"],
      isPasswordShow: false,
      isDialogShow: false,
      userName: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      if (this.userName === "test" && this.password === "123") {
        // this.$router.push({ name: "home" });
        console.log(this.$router);
      } else {
        this.isDialogShow = true;
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin: 5rem auto;
}
</style>
