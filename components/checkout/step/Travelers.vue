<template>
  <CheckoutStep :title="$t('checkout.steps.travelers.title')" :is-active>
    <CheckoutForm
      :schema="TravelersStepZ"
      v-model="state"
      @submit="$emit('step:complete', $event)"
    >
      <div class="gap-8 md:flex md:items-center">
        <label>{{ $t("checkout.steps.travelers.howManyTravelers") }}</label>
        <InputNumber v-model="state.travelers" :min="1" class="mt-8 md:mt-0" />
      </div>
    </CheckoutForm>
  </CheckoutStep>
</template>

<script setup lang="ts">
import type { TravelersStep } from "~/common/checkout";
import { TravelersStepZ } from "~/common/schemas/checkout";

defineComponent({ name: "Travelers" });

type Props = {
  isActive: boolean;
};

defineProps<Props>();

type Emits = {
  "step:complete": [state: { travelers: number }];
};

defineEmits<Emits>();

const state = reactive<TravelersStep>({
  travelers: 1,
});
</script>
