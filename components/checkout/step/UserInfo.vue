<template>
  <CheckoutStep title="Your info" :is-active>
    <UForm :schema="UserInfoStepZ" :state @submit="onSubmit">
      <UFormGroup label="Full name" name="fullName">
        <UInput v-model="state.fullName" />
      </UFormGroup>
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" type="email" />
      </UFormGroup>
      <UFormGroup label="Phone number" name="phoneNumber">
        <UInput v-model="state.phoneNumber" type="tel" />
      </UFormGroup>

      <UButton type="submit">Next</UButton>
    </UForm>
  </CheckoutStep>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { UserInfoStep } from "~/common/checkout";
import { UserInfoStepZ } from "~/schemas/checkout";

defineComponent({ name: "UserInfo" });

type Props = {
  isActive: boolean;
};

defineProps<Props>();

type Emits = {
  "step:complete": [state: UserInfoStep];
};

const emit = defineEmits<Emits>();

const state = reactive<Partial<UserInfoStep>>({});

const onSubmit = (event: FormSubmitEvent<UserInfoStep>) => {
  emit("step:complete", event.data);
};
</script>
