<template>
  <template v-if="result.status === 'idle'">
    <slot name="idle" />
  </template>
  <template v-else-if="result.status === 'error'">
    <slot name="error" :error="result.error">
      <span class="text-red-600">{{ $t("errors.generic") }}</span>
    </slot>
  </template>
  <template v-else-if="result.status === 'pending' && !result.data">
    <slot name="pending" />
  </template>
  <template v-else>
    <slot
      name="default"
      :data="result.data!"
      :is-pending="result.status === 'pending'"
    />
  </template>
</template>

<script setup lang="ts" generic="T, E">
import type { FetchResult } from "~/composables/useFetchWithSchema";

defineComponent({ name: "FetchResult" });

type Props = {
  /**
   * The result of a useFetch
   */
  result: FetchResult<T, E>;
  /**
   * Whether to show a loading spinner when the query is fetching (there is already some stale data available). Defaults to `false`.
   */
  loadingOnPending?: boolean;
};

defineProps<Props>();
</script>
