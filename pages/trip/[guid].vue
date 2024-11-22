<template>
  <FetchResult :result="trip" #="{ data }">
    <div class="my-16 flex flex-col items-center">
      <i18n-t
        scope="global"
        tag="h1"
        class="mb-4 text-center text-4xl"
        keypath="trip.title"
      >
        <span class="font-bold text-primary-500">{{ data.name }}</span>
      </i18n-t>
      <Rating :value="data.rating" />
    </div>
    <img :src="data.picture" class="my-8 h-96 w-full object-cover" />
    <div
      class="flex flex-wrap justify-between gap-8 md:flex-row md:flex-nowrap"
    >
      <div class="grid w-full grid-cols-2 gap-4 md:w-auto">
        <div>
          <div class="text-gray-600">{{ $t("trip.departure") }}</div>
          <div class="text-xl font-semibold" data-allow-mismatch>
            {{ formatDate(data.departureDate) }}
          </div>
        </div>
        <div class="justify-self-end">
          <div class="text-gray-600">{{ $t("trip.return") }}</div>
          <div class="text-xl font-semibold" data-allow-mismatch>
            {{ formatDate(data.returnDate) }}
          </div>
        </div>
      </div>
      <div class="order-1">
        <div class="text-gray-600">{{ $t("trip.price") }}</div>
        <div class="text-xl font-semibold">
          {{ formatCurrency(data.pricePerPerson, "EUR") }}
        </div>
      </div>
      <div class="order-1">
        <BookButton :trip-id="data.id" size="lg" />
      </div>
    </div>
    <section class="mt-16">
      <Markdown :content="data.fullDescription" />
    </section>
    <div class="my-16 flex justify-center md:justify-end">
      <BookButton :trip-id="data.id" size="lg" />
    </div>
  </FetchResult>
</template>

<script setup lang="ts">
defineComponent({ name: "trip" });

const tripId = useRoute().params.guid;

const trip = await useTrip(tripId as string);

usePageTitle(trip.value.data?.name);
</script>
