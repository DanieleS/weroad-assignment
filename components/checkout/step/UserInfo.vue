<template>
  <CheckoutStep :title="$t('checkout.steps.userInfo.title')" :is-active>
    <CheckoutForm
      :schema="UserInfoStepZ"
      v-model="state"
      @submit="$emit('step:complete', $event)"
      class="flex flex-col gap-4"
    >
      <UFormGroup
        :label="$t('checkout.steps.userInfo.fullName')"
        name="fullName"
      >
        <UInput v-model="state.fullName" class="max-w-96" />
      </UFormGroup>
      <UFormGroup
        :label="$t('checkout.steps.userInfo.dateOfBirth')"
        name="dateOfBirth"
      >
        <UPopover :popper="{ placement: 'bottom-start' }">
          <UButton variant="outline" data-testid="dateOfBirth">
            {{
              state.dateOfBirth
                ? formatDate(state.dateOfBirth)
                : $t("common.button.selectDate")
            }}
          </UButton>
          <template #panel="{ close }">
            <InputDatePicker
              v-model="state.dateOfBirth"
              @close="close"
              :max-date="new Date()"
            />
          </template>
        </UPopover>
      </UFormGroup>
      <UFormGroup :label="$t('checkout.steps.userInfo.email')" name="email">
        <UInput v-model="state.email" type="email" class="max-w-96" />
      </UFormGroup>
      <UFormGroup
        :label="$t('checkout.steps.userInfo.phone')"
        name="phoneNumber"
      >
        <UInput v-model="state.phoneNumber" type="tel" class="max-w-96" />
      </UFormGroup>
    </CheckoutForm>
  </CheckoutStep>
</template>

<script setup lang="ts">
import type { UserInfoStep } from "~/common/checkout";
import { UserInfoStepZ } from "~/common/schemas/checkout";

defineComponent({ name: "UserInfo" });

type Props = {
  isActive: boolean;
};

defineProps<Props>();

type Emits = {
  "step:complete": [state: UserInfoStep];
};

defineEmits<Emits>();

const state = reactive<Partial<UserInfoStep>>({});
</script>
