<template>
  <UButton @click="startCheckout" :loading :size>
    {{ $t("search.buttons.bookTrip") }}
    <UIcon name="i-fa6-solid-plane-departure" class="ml-2" />
  </UButton>
</template>

<script setup lang="ts">
defineComponent({ name: "BookButton" });

type Props = {
  tripId: string;
  size?: "sm" | "md" | "lg";
};

const props = defineProps<Props>();

const router = useRouter();

const loading = ref(false);

const startCheckout = async () => {
  loading.value = true;

  const { sessionId } = await $fetch("/api/checkout/session", {
    method: "POST",
    body: { tripId: props.tripId },
  });

  await router.push({
    name: "checkout",
    query: { session: sessionId },
  });
  loading.value = false;
};
</script>
