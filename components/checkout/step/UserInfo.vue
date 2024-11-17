<template>
  <CheckoutStep title="Your info" :is-active>
    <UForm :state @submit="onSubmit">
      <UFormGroup label="Full name">
        <UInput v-model="state.fullName" />
      </UFormGroup>
      <UFormGroup label="Email">
        <UInput v-model="state.email" type="email" />
      </UFormGroup>
      <UFormGroup label="Phone number">
        <UInput v-model="state.phoneNumber" type="tel" />
      </UFormGroup>

      <UButton type="submit">Next</UButton>
    </UForm>
  </CheckoutStep>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { UserInfoStep } from "~/common/checkout";

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
