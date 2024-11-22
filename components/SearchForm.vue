<template>
  <div class="@container mx-auto mb-8 mt-4 w-full max-w-[36rem]">
    <UForm
      :state="searchState"
      @submit="onSubmit"
      class="@[36rem]:p-2 rounded border border-gray-50 bg-white p-4 shadow-xl"
    >
      <div>
        <slot name="title" />
      </div>
      <div class="@[36rem]:flex-row @[36rem]:items-end flex w-full flex-col gap-4 ">
      <UFormGroup name="destination" class="grow">
        <USelectMenu
          v-model="destination"
          value-attribute="value"
          option-attribute="title"
          :options
          :placeholder="$t('search.destinationPlaceholder')"
          class="w-full min-w-48 text-primary-500"
          variant="none"
          color="primary"
          size="lg"
        />
      </UFormGroup name="dateRange" class="grow">
      <UFormGroup>
        <UPopover :popper="{ placement: 'bottom-start' }">
          <UButton
            class="w-full min-w-48"
            variant="ghost"
            size="lg"
            data-allow-mismatch
          >
            <span v-if="dateRange" class="text-primary-500">
              {{ formatDateRange(dateRange) }}
            </span>
            <span v-else class="text-gray-400">{{
              $t("search.dateRangePlaceholder")
            }}</span>
          </UButton>
          <template #panel="{ close }">
            <InputDatePicker
              :range="true"
              v-model="dateRange"
              @close="close"
              :min-date="new Date()"
            />
          </template>
        </UPopover>
      </UFormGroup>
      <UButton type="submit" icon="i-fa6-solid-magnifying-glass" size="lg">{{
        $t("search.submit")
      }}</UButton>
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { DatePickerRangeObject } from "v-calendar/dist/types/src/use/datePicker.js";
import type { LocationQueryValue } from "vue-router";
import { buildUrlQueryParams, urlSearchParamsToRecord } from "~/utils/url";

defineComponent({ name: "SearchForm" });

type Props = {
  /**
   * Navigation mode to use when submitting the form.
   */
  navigation: "push" | "replace";
};

const props = defineProps<Props>();

const { t } = useI18n();
const router = useRouter();

type SearchState = {
  destination?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
};

const destination = ref<string>();
const dateRange = ref<DatePickerRangeObject>();

const searchState = computed(() => {
  return {
    destination: destination.value,
    dateRange: dateRange.value,
  };
});

watch(
  () => useRoute().query,
  (query) => {
    if (query.destination && typeof query.destination === "string") {
      destination.value = query.destination;
    }

    if (
      query["dateRange.start"] &&
      typeof query["dateRange.start"] === "string" &&
      query["dateRange.end"] &&
      typeof query["dateRange.end"] === "string"
    ) {
      dateRange.value = {
        start: new Date(query["dateRange.start"]),
        end: new Date(query["dateRange.end"]),
      };
    }
  },
  {
    immediate: true,
  },
);

async function onSubmit(event: FormSubmitEvent<SearchState>) {
  const query = urlSearchParamsToRecord(buildUrlQueryParams(event.data));

  if (props.navigation === "push") {
    await router.push({ name: "search", query });
  } else {
    await router.replace({ name: "search", query });
  }
}

const options = [
  { value: "europe", title: t("search.area.europe") },
  { value: "asia", title: t("search.area.asia") },
  { value: "africa", title: t("search.area.africa") },
  { value: "america", title: t("search.area.america") },
  { value: "oceania", title: t("search.area.oceania") },
];

const formatDateRange = (
  dateRange: DatePickerRangeObject | undefined,
): string | null => {
  if (dateRange?.start && dateRange?.end) {
    return `${formatDate(dateRange.start as Date, "numeric")} - ${formatDate(dateRange.end as Date, "numeric")}`;
  }

  return null;
};
</script>
