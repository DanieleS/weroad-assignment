<template>
  <section class="relative bg-cover bg-bottom p-4 py-16 md:bg-center md:py-32">
    <NuxtImg
      src="/images/homepage.jpg"
      alt=""
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
      class="absolute inset-0 h-full w-full select-none object-cover"
    />
    <div
      class="container relative z-10 mx-auto flex flex-col justify-between md:flex-row md:items-center"
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
  background-image: url("/images/homepage.jpg");
}
</style>
