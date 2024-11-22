<template>
  <section class="search-section p-4 py-16 md:py-32">
    <div
      class="container mx-auto flex flex-col justify-between md:flex-row md:items-center"
    >
      <h2
        class="text-4xl font-semibold text-white md:mb-8 md:basis-1/2 lg:text-5xl"
      >
        {{ $t("homepage.title") }}
      </h2>
      <div class="md:basis-96">
        <SearchForm navigation="push" #title>
          <div class="mb-4 px-2 text-lg">{{ $t("homepage.searchTitle") }}</div>
        </SearchForm>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineComponent({ name: "SearchSection" });
</script>

<style scoped>
.search-section {
  background: url("~/assets/images/homepage.webp") center center;
  background-size: cover;
}
</style>
