<template>
  <div>
    <FetchResult :result="trip" #="{ data }">
      <h1 class="mb-8 mt-4 text-2xl">
        {{
          t("checkout.title", {
            destination: data.name,
          })
        }}
      </h1>
      <div class="grid grid-cols-4 gap-4">
        <div class="steps col-span-4 flex flex-col gap-4 lg:col-span-3">
          <CheckoutStepTravelers
            :is-active="currentStep === 'travelers'"
            @step:complete="onSubmit('travelers', 'userInfo', $event)"
            @step:edit="currentStep = 'travelers'"
          />
          <CheckoutStepUserInfo
            :is-active="currentStep === 'userInfo'"
            @step:complete="onSubmit('userInfo', 'payment', $event)"
            @step:edit="currentStep = 'userInfo'"
          />
          <CheckoutStepPayment
            :is-active="currentStep === 'payment'"
            @step:complete="onSubmit('payment', 'done', $event)"
          />
        </div>
        <CheckoutRecap
          :trip="data"
          :travelers="checkoutState.travelers?.travelers"
          class="col-span-4 mt-8 self-start lg:col-span-1 lg:mt-0"
        />
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

const checkoutSession = useCheckoutSession();
const trip = await useCheckoutTrip();

usePageTitle(
  t("checkout.pageTitle", {
    destination: trip.value.data?.name,
  }),
);

type Step = "travelers" | "userInfo" | "payment" | "done";

const currentStep = ref<Step>("travelers");

const checkoutState = ref<Partial<Checkout>>({});

const onSubmit = async <T extends Exclude<Step, "done">>(
  from: T,
  to: Step,
  data: Checkout[T],
) => {
  checkoutState.value[from] = data;
  if (to === "done") {
    // Remove the payment step from the checkout state, as this is only a demo project
    delete checkoutState.value.payment;

    await $fetch("/api/checkout/confirm", {
      method: "POST",
      body: { session: checkoutSession.value, state: checkoutState.value },
    });

    navigateTo("/checkout/success");
  } else {
    currentStep.value = to;
  }
};
</script>

<style scoped>
.steps {
  counter-reset: checkout-step;
}
</style>
