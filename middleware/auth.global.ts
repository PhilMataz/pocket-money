export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  const isGuestMode = to.meta.unauthenticatedOnly ?? false;

  if (isGuestMode && user.value) {
    return navigateTo("/");
  }
  return;
});
