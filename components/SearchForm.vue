<template>
  <UForm :state="searchState" @submit="onSubmit">
    <UFormGroup label="Destination">
      <USelectMenu
        v-model="destination"
        value-attribute="value"
        option-attribute="title"
        :options
      />
    </UFormGroup>
    <UFormGroup label="Dates">
      <UPopover :popper="{ placement: 'bottom-start' }">
        <ClientOnly
          ><UButton>
            {{ formatDateRange(dateRange) ?? "Select dates" }}
          </UButton>
        </ClientOnly>
        <template #panel="{ close }">
          <InputDateRangePicker v-model="dateRange" @close="close" />
        </template>
      </UPopover>
    </UFormGroup>
    <UButton type="submit">{{ $t("search.submit") }}</UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { DatePickerRangeObject } from "v-calendar/dist/types/src/use/datePicker.js";
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
  { value: "northAmerica", title: t("search.area.northAmerica") },
  { value: "southAmerica", title: t("search.area.southAmerica") },
  { value: "oceania", title: t("search.area.oceania") },
];

const formatDateRange = (
  dateRange: DatePickerRangeObject | undefined,
): string | null => {
  if (dateRange?.start && dateRange?.end) {
    return `${formatDate(dateRange.start as Date)} / ${formatDate(dateRange.end as Date)}`;
  }

  return null;
};
</script>
