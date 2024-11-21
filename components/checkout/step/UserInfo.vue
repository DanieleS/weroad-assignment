<template>
  <CheckoutStep
    :title="$t('checkout.steps.userInfo.title')"
    :is-active
    :has-data
    @step:edit="$emit('step:edit')"
  >
    <CheckoutForm
      :schema="UserInfoStepZ"
      v-model="state"
      @submit="(hasData = true), $emit('step:complete', $event)"
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
    <template #summary>
      <div class="grid w-fit grid-cols-2 gap-2">
        <div>{{ $t("checkout.steps.userInfo.summary.fullName") }}:</div>
        <div>{{ state.fullName }}</div>
        <div>{{ $t("checkout.steps.userInfo.summary.email") }}:</div>
        <div>{{ state.email }}</div>
        <div>{{ $t("checkout.steps.userInfo.summary.phone") }}:</div>
        <div>{{ state.phoneNumber }}</div>
        <div>{{ $t("checkout.steps.userInfo.summary.dateOfBirth") }}:</div>
        <div>{{ formatDate(state.dateOfBirth!) }}</div>
      </div>
    </template>
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
  "step:edit": [];
};

defineEmits<Emits>();

const state = reactive<Partial<UserInfoStep>>({});
const hasData = ref(false);
</script>
