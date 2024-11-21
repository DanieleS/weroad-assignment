<template>
  <CheckoutStep :title="$t('checkout.steps.payment.title')" :is-active>
    <CheckoutForm
      class="flex flex-col gap-4"
      :schema="PaymentStepZ"
      v-model="state"
      :next-label="$t('common.button.confirm')"
      @submit="$emit('step:complete', $event)"
    >
      <UFormGroup
        class="max-w-96"
        :label="$t('checkout.steps.payment.cardHolder')"
        name="cardHolder"
        required
      >
        <UInput v-model="state.cardHolder" />
      </UFormGroup>
      <UFormGroup
        class="max-w-96"
        :label="$t('checkout.steps.payment.cardNumber')"
        name="cardNumber"
        required
      >
        <UInput v-model="state.cardNumber" />
      </UFormGroup>
      <div class="flex max-w-96 flex-col gap-4 md:flex-row">
        <UFormGroup
          :label="$t('checkout.steps.payment.expirationDate')"
          name="expirationDate"
          class="grow"
          required
        >
          <InputCardExpiration v-model="state.expirationDate" />
        </UFormGroup>
        <UFormGroup
          :label="$t('checkout.steps.payment.cvv')"
          name="cvv"
          class="grow"
          required
        >
          <UInput v-model="state.cvv" />
        </UFormGroup>
      </div>
    </CheckoutForm>
  </CheckoutStep>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { PaymentStep } from "~/common/checkout";
import { PaymentStepZ } from "~/common/schemas/checkout";

defineComponent({ name: "UserInfo" });

type Props = {
  isActive: boolean;
};

defineProps<Props>();

type Emits = {
  "step:complete": [state: PaymentStep];
  "step:edit": [];
};

const emit = defineEmits<Emits>();

const state = reactive<Partial<PaymentStep>>({});
</script>
