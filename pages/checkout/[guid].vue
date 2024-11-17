<template>
  <div>
    <h1>Checkout</h1>
    <FetchResult :result="travel" #="{ data }">
      <div>
        <CheckoutStepTravelers
          :is-active="currentStep === 'travelers'"
          @step:complete="onSubmit('travelers', 'userInfo', $event)"
        />
        <CheckoutStepUserInfo
          :is-active="currentStep === 'userInfo'"
          @step:complete="onSubmit('userInfo', 'payment', $event)"
        />
        <CheckoutStepPayment
          :is-active="currentStep === 'payment'"
          @step:complete="onSubmit('payment', 'travelers', $event)"
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

type Step = "travelers" | "userInfo" | "payment";

const currentStep = ref<Step>("travelers");

const checkoutState = ref<Partial<Checkout>>({
  travelers: {
    travelers: 1,
  },
});

const onSubmit = <T extends Step>(from: T, to: Step, data: Checkout[T]) => {
  checkoutState.value[from] = data;
  currentStep.value = to;
};
</script>
