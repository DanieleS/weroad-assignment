<template>
  <div>
    <h1>Checkout</h1>
    <FetchResult :result="travel" #="{ data }">
      <div>
        <CheckoutStepTravelers
          @step:complete="checkoutState.travelers = $event"
        />
      </div>
      <div>
        {{ data.name }}
      </div>
    </FetchResult>
  </div>
</template>

<script setup lang="ts">
import type { Checkout } from "~/common/checkout";

defineComponent({ name: "checkout" });

definePageMeta({
  layout: "checkout",
});

const { t } = useI18n();

const travel = await useTravel();

usePageTitle(
  t("checkout.title", {
    destination: travel.data.value?.name,
  }),
);

const checkoutState = ref<Partial<Checkout>>({
  travelers: {
    travelers: 1,
  },
});
</script>
