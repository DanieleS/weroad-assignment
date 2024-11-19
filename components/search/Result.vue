<template>
  <article class="relative h-full rounded-xl border border-gray-200 bg-gray-50">
    <img
      :src="travel.picture"
      class="absolute h-full w-full rounded-xl object-cover"
    />
    <div class="relative z-10 mx-4 mb-4 mt-48 rounded-lg bg-white p-4">
      <div class="text-xl font-bold">{{ travel.name }}</div>
      <div class="text-xs">{{ travel.description }}</div>
      <div class="my-4" data-allow-mismatch="text">
        {{ formatDate(travel.departureDate) }} -
        {{ formatDate(travel.arrivalDate) }}
      </div>
      <div class="mt-8 flex items-center justify-between">
        <div class="text-lg font-semibold">
          {{ formatCurrency(travel.pricePerPerson, "EUR") }}
        </div>
        <UButton :to="checkoutUrl">
          {{ $t("search.buttons.bookTravel") }}
          <UIcon name="i-fa6-solid-plane-departure" class="ml-2" />
        </UButton>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Travel } from "~/common/travels";
import { formatCurrency } from "~/utils/formatting";

defineComponent({ name: "TravelResult" });

type Props = {
  travel: Travel;
};

const props = defineProps<Props>();

const checkoutUrl = computed(() => {
  return `/checkout/${props.travel.id}`;
});
</script>
