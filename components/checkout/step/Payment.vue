<template>
  <CheckoutStep title="Payment Info" :is-active>
    <UForm :state @submit="onSubmit">
      <UFormGroup label="Card Holder">
        <UInput v-model="state.cardHolder" />
      </UFormGroup>
      <UFormGroup label="Card Number">
        <UInput v-model="state.cardNumber" />
      </UFormGroup>
      <UFormGroup label="Expiration Date">
        <UInput v-model="state.expirationDate" />
      </UFormGroup>
      <UFormGroup label="CVV">
        <UInput v-model="state.cvv" />
      </UFormGroup>

      <UButton type="submit">Next</UButton>
    </UForm>
  </CheckoutStep>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { PaymentStep } from "~/common/checkout";

defineComponent({ name: "UserInfo" });

type Props = {
  isActive: boolean;
};

defineProps<Props>();

type Emits = {
  "step:complete": [state: PaymentStep];
};

const emit = defineEmits<Emits>();

const state = reactive<Partial<PaymentStep>>({});

const onSubmit = (event: FormSubmitEvent<PaymentStep>) => {
  emit("step:complete", event.data);
};
</script>
