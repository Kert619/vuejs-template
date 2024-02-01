<template>
  <div>
    <img src="/bg.png" class="bg-img" />
    <div class="darken"></div>
    <div class="d-flex justify-content-center">
      <form class="my-5 p-5 border bg-white" @submit.prevent="login">
        <div class="d-flex justify-content-center mb-3">
          <img src="/logo.png" width="300" />
        </div>
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input type="text" class="form-control" v-model="form.username" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" v-model="form.password" />
        </div>

        <!-- <div class="alert alert-danger text-center" v-if="errorMsg">
          {{ errorMsg }}
        </div> -->

        <div class="d-grid">
          <button type="submit" class="btn btn-danger">Login</button>
        </div>

        <p class="mt-3 text-center">
          Not a member? Sign up
          <RouterLink to="/register">here</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import api from "@/http/api";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  username: "",
  password: "",
});

async function login() {
  const result = await api.post("/jwt/login/", form.value);
  router.push("/dashboard");
}
</script>

<style scoped>
form {
  width: 500px;
  z-index: 999;
}

.darken {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  pointer-events: none;
}

.bg-blur {
  backdrop-filter: blur(5px);
}

.bg-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>
