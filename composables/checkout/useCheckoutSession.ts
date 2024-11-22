export const useCheckoutSession = () => {
  const route = useRoute();
  return computed(() => route.query.session as string);
};
