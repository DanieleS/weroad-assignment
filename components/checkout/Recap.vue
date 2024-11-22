<template>
  <aside
    class="flex flex-col gap-4 rounded-xl border border-gray-300 p-4 @container"
  >
    <div class="text-lg font-semibold">
      {{
        $t("checkout.pageTitle", {
          destination: trip.name,
        })
      }}
    </div>
    <img :src="trip.picture" class="h-48 w-full rounded-md object-cover" />
    <div class="justify-between @[16rem]:flex">
      <div class="basis-1/2 text-gray-600">{{ $t("checkout.recap.from") }}</div>
      <div data-allow-mismatch>{{ formatDate(trip.departureDate) }}</div>
    </div>
    <div class="justify-between @[16rem]:flex">
      <div class="basis-1/2 text-gray-600">{{ $t("checkout.recap.to") }}</div>
      <div data-allow-mismatch>{{ formatDate(trip.returnDate) }}</div>
    </div>
    <UDivider />
    <CheckoutPrices :trip :travelers />
  </aside>
</template>

<script setup lang="ts">
import type { Trip } from "~/common/trips";

defineComponent({ name: "Recap" });

type Props = {
  trip: Trip;
  travelers?: number;
};

defineProps<Props>();
</script>
