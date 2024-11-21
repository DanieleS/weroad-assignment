<template>
  <div class="flex gap-1">
    <USelect
      v-model="month"
      :options="monthOptions"
      class="rounded-none ring-0"
      name="expirationMonth"
    />
    <span>/</span>
    <USelect
      v-model="year"
      :options="yearOptions"
      class="rounded-none ring-0 md:grow"
      name="expirationYear"
    />
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: "CardExpiration" });

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
</script>
