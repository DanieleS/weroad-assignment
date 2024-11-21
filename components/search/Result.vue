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
        {{ formatDate(travel.returnDate) }}
      </div>
      <Rating :value="travel.rating" />
      <div class="mt-8 flex flex-wrap items-center justify-between">
        <div class="text-xs">
          <i18n-t scope="global" keypath="search.price">
            <span class="text-lg font-semibold">
              {{ formatCurrency(travel.pricePerPerson, "EUR") }}
            </span>
          </i18n-t>
        </div>
        <!-- Class on button are needed when/if it wraps -->
        <UButton :to="checkoutUrl" class="ml-auto mt-2">
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
