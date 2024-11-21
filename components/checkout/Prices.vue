<template>
  <div class="@[16rem]:flex justify-between">
    <div class="basis-1/2 text-gray-600">
      {{ $t("checkout.recap.travelers") }}
    </div>
    <div>{{ travelers ?? "-" }}</div>
  </div>
  <div class="@[16rem]:flex justify-between">
    <div class="basis-1/2 text-gray-600">
      {{ $t("checkout.recap.perPerson") }}
    </div>
    <div>{{ formatCurrency(travel.pricePerPerson, "EUR") }}</div>
  </div>
  <UDivider />
  <div class="@[16rem]:flex justify-between font-semibold">
    <div class="basis-1/2 text-gray-600">
      {{ $t("checkout.recap.total") }}
    </div>
    <div class="text-lg">
      {{
        travelers
          ? formatCurrency(travelers * travel.pricePerPerson, "EUR")
          : "-"
      }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Travel } from "~/common/travels";

defineComponent({ name: "Prices" });

type Props = {
  travel: Travel;
  travelers?: number;
};

defineProps<Props>();
</script>
