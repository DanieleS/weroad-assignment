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
          @step:complete="onSubmit('payment', 'done', $event)"
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
  layout: "empty",
});

const { t } = useI18n();

const travel = await useTravel();

usePageTitle(
  t("checkout.title", {
    destination: travel.data.value?.name,
  }),
);

type Step = "travelers" | "userInfo" | "payment" | "done";

const currentStep = ref<Step>("travelers");

const checkoutState = ref<Partial<Checkout>>({
  travelers: {
    travelers: 1,
  },
});

const onSubmit = <T extends Exclude<Step, "done">>(
  from: T,
  to: Step,
  data: Checkout[T],
) => {
  checkoutState.value[from] = data;
  if (to === "done") {
    navigateTo("/checkout/success");
  } else {
    currentStep.value = to;
  }
};
</script>
