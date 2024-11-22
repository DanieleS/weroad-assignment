<template>
  <div class="justify-between @[16rem]:flex">
    <div class="basis-1/2 text-gray-600">
      {{ $t("checkout.recap.travelers") }}
    </div>
    <div>{{ travelers ?? "-" }}</div>
  </div>
  <div class="justify-between @[16rem]:flex">
    <div class="basis-1/2 text-gray-600">
      {{ $t("checkout.recap.perPerson") }}
    </div>
    <div>{{ formatCurrency(trip.pricePerPerson, "EUR") }}</div>
  </div>
  <UDivider />
  <div class="justify-between font-semibold @[16rem]:flex">
    <div class="basis-1/2 text-gray-600">
      {{ $t("checkout.recap.total") }}
    </div>
    <div class="text-lg">
      {{
        travelers ? formatCurrency(travelers * trip.pricePerPerson, "EUR") : "-"
      }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Trip } from "~/common/trips";

defineComponent({ name: "Prices" });

type Props = {
  trip: Trip;
  travelers?: number;
};

defineProps<Props>();
</script>
