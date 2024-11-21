<template>
  <div>
    <FetchResult :result="travel" #="{ data }">
      <h1 class="mb-8 mt-4 text-2xl">
        {{
          t("checkout.title", {
            destination: data.name,
          })
        }}
      </h1>
      <div class="grid grid-cols-4 gap-4">
        <div class="steps col-span-4 flex flex-col gap-4 md:col-span-3">
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
          :travel="data"
          :travelers="checkoutState.travelers?.travelers"
          class="col-span-4 mt-8 self-start md:col-span-1 md:mt-0"
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

const travel = await useTravel();

usePageTitle(
  t("checkout.pageTitle", {
    destination: travel.value.data?.name,
  }),
);

type Step = "travelers" | "userInfo" | "payment" | "done";

const currentStep = ref<Step>("travelers");

const checkoutState = ref<Partial<Checkout>>({});

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

<style scoped>
.steps {
  counter-reset: checkout-step;
}
</style>
