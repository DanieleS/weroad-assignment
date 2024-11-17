<template>
  <div>
    <h1>Checkout</h1>
    <FetchResult :result="travel" #="{ data }">
      <div>
        {{ data.name }}
      </div>
    </FetchResult>
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: "checkout" });

definePageMeta({
  layout: "checkout",
});

const { t } = useI18n();

const travel = await useTravel();

usePageTitle(
  t("checkout.title", {
    destination: travel.data.value?.name,
  }),
);
</script>
