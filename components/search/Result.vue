<template>
  <article class="rounded-sm border border-gray-200 bg-gray-50">
    <h2>{{ travel.name }}</h2>
    <p>{{ travel.description }}</p>
    <p>{{ formatCurrency(travel.pricePerPerson, "EUR") }}</p>
    <UButton :to="checkoutUrl">Go to checkout</UButton>
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
