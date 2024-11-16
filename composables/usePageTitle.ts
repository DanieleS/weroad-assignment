import { getMaybeComputedRef, type MaybeComputedRef } from "~/utils/vue";

export const usePageTitle = (title?: MaybeComputedRef<string>) => {
  const { t } = useI18n();
  const titleRef = getMaybeComputedRef(title);
  const baseTitle = t("title");

  const titleText = computed(() =>
    titleRef.value ? `${titleRef.value} - ${baseTitle}` : baseTitle,
  );

  useHead({
    title: titleText,
  });
};
