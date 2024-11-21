<template>
  <aside class="flex flex-col gap-4 rounded-xl border border-gray-300 p-4">
    <div class="text-lg font-semibold">
      {{
        $t("checkout.pageTitle", {
          destination: travel.name,
        })
      }}
    </div>
    <img :src="travel.picture" class="h-48 w-full rounded-md object-cover" />
    <div class="flex justify-between">
      <div class="basis-1/2 text-gray-600">{{ $t("checkout.recap.from") }}</div>
      <div data-allow-mismatch>{{ formatDate(travel.departureDate) }}</div>
    </div>
    <div class="flex justify-between">
      <div class="basis-1/2 text-gray-600">{{ $t("checkout.recap.to") }}</div>
      <div data-allow-mismatch>{{ formatDate(travel.returnDate) }}</div>
    </div>
    <UDivider />
    <CheckoutPrices :travel :travelers />
  </aside>
</template>

<script setup lang="ts">
import type { Travel } from "~/common/travels";

defineComponent({ name: "Recap" });

type Props = {
  travel: Travel;
  travelers?: number;
};

defineProps<Props>();
</script>
