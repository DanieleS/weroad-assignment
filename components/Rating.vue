<template>
  <div class="flex items-center gap-1">
    <div v-for="width in widths" class="star size-5 bg-gray-100">
      <div
        class="h-full bg-primary-500"
        :style="{
          width: `${width}%`,
        }"
      />
    </div>
    <div class="ml-2 text-sm">{{ value }}/5</div>
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: "Rating" });

type Props = {
  value: number;
};

const props = defineProps<Props>();

const widths = computed(() => {
  return Array.from({ length: 5 }, (_, index) => {
    if (props.value > index) {
      return Math.min(100, (props.value - index) * 100);
    }
    return 0;
  });
});
</script>

<style scoped>
.star {
  /* Star pattern */
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}
</style>
