<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/progress">Progress </RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, watch } from "vue";
const sampleStartDate = ref<{ year: number; month: number; day: number }>({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
});

watch(sampleStartDate, () => {
  console.log("sampleStartDate", sampleStartDate);
});
</script>

<style scoped lang="scss">
nav {
  display: flex;
  gap: 20px;

  a {
    font-size: 20px;
  }
  padding: 20px;
  background-color: lavender;
}
main {
  padding: 20px;
}
</style>
