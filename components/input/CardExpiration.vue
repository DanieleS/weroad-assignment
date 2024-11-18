<template>
  <div class="flex gap-1 rounded-sm ring-2">
    <USelect :options="monthOptions" class="rounded-none ring-0" />
    <span>/</span>
    <USelect :options="yearOptions" class="rounded-none ring-0" />
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: "CardExpiration" });

const model = defineModel<string>();

const monthOptions = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const yearOptions = Array.from(
  { length: 10 },
  (_, i) => new Date().getFullYear() + i,
);
</script>
