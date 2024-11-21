<template>
  <div class="flex gap-1">
    <USelect
      v-model="month"
      :options="monthOptions"
      class="rounded-none ring-0"
      name="expirationMonth"
      :id="`${formGroupInjectedValue?.inputId?.value}-month`"
    />
    <span>/</span>
    <USelect
      v-model="year"
      :options="yearOptions"
      class="rounded-none ring-0 md:grow"
      name="expirationYear"
      :id="`${formGroupInjectedValue?.inputId?.value}-year`"
    />
    <UInput
      class="hidden"
      v-model="model"
      :id="formGroupInjectedValue?.inputId?.value"
    />
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: "CardExpiration", inheritAttrs: false });

const model = defineModel<string>();

const month = ref<string>("1");
const year = ref<string>(String(new Date().getFullYear()));

watch(
  [month, year],
  ([month, year]) => {
    model.value = `${month}/${year}`;
  },
  {
    immediate: true,
  },
);

const monthOptions = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const yearOptions = Array.from(
  { length: 10 },
  (_, i) => new Date().getFullYear() + i,
);

/**
 * Not documented in NuxtUI
 * https://github.com/nuxt/ui/blob/dbd2aed20b531614683795b7d4999730c6b750e2/src/runtime/components/forms/Input.vue#L171
 *
 * Used to get the inputId value from the parent form group and avoid getting it assigned to the wrong input.
 */
const formGroupInjectedValue = useFormGroup();
</script>
