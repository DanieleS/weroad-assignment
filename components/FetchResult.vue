<template>
  <template v-if="result.status.value === 'idle'">
    <slot name="idle" />
  </template>
  <template
    v-else-if="
      result.status.value === 'pending' &&
      (loadingOnPending || !result.data.value)
    "
  >
    <slot name="pending" />
  </template>
  <template v-else-if="result.status.value === 'error'">
    <slot name="error" :error="result.error.value">
      <span class="text-red-600">{{ $t("errors.generic") }}</span>
    </slot>
  </template>
  <template v-else>
    <slot
      name="default"
      :data="result.data.value!"
      :status="result.status.value"
    />
  </template>
</template>

<script setup lang="ts" generic="T, E">
import type { AsyncData } from "nuxt/app";

defineComponent({ name: "FetchResult" });

type Props = {
  /**
   * The result of a useFetch
   */
  result: Awaited<AsyncData<T, E>>;
  /**
   * Whether to show a loading spinner when the query is fetching (there is already some stale data available). Defaults to `false`.
   */
  loadingOnPending?: boolean;
};

defineProps<Props>();
</script>
