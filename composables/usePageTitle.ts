import { getMaybeComputedRef, type MaybeComputedRef } from "~/utils/vue";

const PAGE_NAME = "WeRoad Assignment";

export const usePageTitle = (title?: MaybeComputedRef<string>) => {
  const titleRef = getMaybeComputedRef(title);

  const titleText = computed(() =>
    titleRef.value ? `${titleRef.value} - ${PAGE_NAME}` : PAGE_NAME,
  );

  useHead({
    title: titleText,
  });
};
