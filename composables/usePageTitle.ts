import { getMaybeComputedRef, type MaybeComputedRef } from "~/utils/vue";

const BASE_TITLE = "NoiViaggiamo";

export const usePageTitle = (title?: MaybeComputedRef<string>) => {
  const titleRef = getMaybeComputedRef(title);

  const titleText = computed(() =>
    titleRef.value ? `${titleRef.value} - ${BASE_TITLE}` : BASE_TITLE,
  );

  useHead({
    title: titleText,
  });
};
