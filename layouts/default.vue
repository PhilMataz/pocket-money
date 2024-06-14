<template>
  <main class="DefaultLayout flex h-screen w-full">
    <BaseSidebar :user="loggedIn" />
    <div class="flex size-full flex-col">
      <div
        class="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden"
      >
        <LucideBitcoin class="size-10 text-primary" />
        <div>
          <BaseMobileNavbar :user="loggedIn" />
        </div>
      </div>
      <slot />
    </div>
  </main>
</template>
<script lang="ts" setup>
import type { User } from "~/types";

const loggedIn = ref({
  firstName: "Phillip",
  lastName: "Matambanadzo",
}) as unknown as User;
</script>
