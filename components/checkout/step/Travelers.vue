<template>
  <CheckoutStep
    :title="$t('checkout.steps.travelers.title')"
    :is-active
    :has-data
    @step:edit="$emit('step:edit')"
  >
    <CheckoutForm
      :schema="TravelersStepZ"
      v-model="state"
      @submit="(hasData = true), $emit('step:complete', $event)"
    >
      <UFormGroup
        name="travelers"
        class="gap-8 md:flex md:items-center"
        :label="$t('checkout.steps.travelers.howManyTravelers')"
      >
        <InputNumber v-model="state.travelers" :min="1" class="mt-8 md:mt-0" />
      </UFormGroup>
    </CheckoutForm>
    <template #summary>
      <div>
        {{ $t("checkout.steps.travelers.summary.travelers") }}:
        {{ state.travelers }}
      </div>
    </template>
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
  "step:edit": [];
};

defineEmits<Emits>();

const state = reactive<TravelersStep>({
  travelers: 1,
});

const hasData = ref(false);
</script>
