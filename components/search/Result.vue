<template>
  <article class="relative h-full rounded-xl border border-gray-200 bg-gray-50">
    <img
      :src="trip.picture"
      class="absolute h-full w-full rounded-xl object-cover"
    />
    <div class="relative z-10 mx-4 mb-4 mt-48 rounded-lg bg-white p-4">
      <div class="text-xl font-bold">{{ trip.name }}</div>
      <div class="text-xs">{{ trip.description }}</div>
      <div class="my-4" data-allow-mismatch="text">
        {{ formatDate(trip.departureDate) }} -
        {{ formatDate(trip.returnDate) }}
      </div>
      <Rating :value="trip.rating" />
      <div class="mt-8 flex flex-wrap items-center justify-between">
        <div class="text-xs">
          <i18n-t scope="global" keypath="search.price">
            <span class="text-lg font-semibold">
              {{ formatCurrency(trip.pricePerPerson, "EUR") }}
            </span>
          </i18n-t>
        </div>
        <!-- Class on button are needed when/if it wraps -->
        <UButton @click="startCheckout" class="ml-auto mt-2" :loading>
          {{ $t("search.buttons.bookTrip") }}
          <UIcon name="i-fa6-solid-plane-departure" class="ml-2" />
        </UButton>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Trip } from "~/common/trips";
import { formatCurrency } from "~/utils/formatting";

defineComponent({ name: "TripResult" });

type Props = {
  trip: Trip;
};

const props = defineProps<Props>();

const router = useRouter();

const loading = ref(false);

const startCheckout = async () => {
  loading.value = true;

  const { sessionId } = await $fetch("/api/checkout/session", {
    method: "POST",
    body: { tripId: props.trip.id },
  });

  await router.push({
    name: "checkout",
    query: { session: sessionId },
  });
  loading.value = false;
};
</script>
