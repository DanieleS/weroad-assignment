<template>
  <UButton
    class="md:hidden"
    icon="i-fa6-solid-bars"
    variant="ghost"
    @click="isOpen = true"
  />
  <UModal v-model="isOpen" fullscreen>
    <UCard
      :ui="{
        base: 'h-full flex flex-col',
        rounded: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        body: {
          base: 'grow',
        },
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            {{ $t("header.menu") }}
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false"
          />
        </div>
      </template>

      <MainNav />
    </UCard>
  </UModal>
  <MainNav class="ml-16 hidden grow md:block" />
</template>

<script setup lang="ts">
defineComponent({ name: "MainMenu" });

const isOpen = ref(false);

// Close the menu when the screen size changes.
let mediaQueryList: MediaQueryList | null = null;
const mediaEventHandler = () => {
  isOpen.value = false;
};

onMounted(() => {
  mediaQueryList = window.matchMedia("(min-width: 768px)");
  mediaQueryList.addEventListener("change", mediaEventHandler);
});

onUnmounted(() => {
  mediaQueryList?.removeEventListener("change", mediaEventHandler);
});
</script>
