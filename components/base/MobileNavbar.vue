<template>
  <div class="w-full max-w-[265px]">
    <div class="drawer">
      <input
        id="my-drawer"
        ref="drawerToggle"
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-content">
        <!-- Page content here -->
        <label
          for="my-drawer"
          class="btn btn-ghost drawer-button"
          ><LucideMenu
            class="size-8"
            alt="menu"
        /></label>
      </div>
      <div class="drawer-side">
        <label
          for="my-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu min-h-full w-80 bg-base-100 p-4 text-base-content">
          <!-- Sidebar content here -->
          <NuxtLink
            to="/"
            class="flex cursor-pointer items-center gap-1"
          >
            <LucideBitcoin class="size-10 text-primary" />
            <h1 class="font-bold text-base-content text-26">
              PocketMoney
            </h1></NuxtLink
          >
          <div
            class="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto"
          >
            <nav class="flex h-full flex-col gap-6 pt-16 text-base-100">
              <NuxtLink
                v-for="link in sidebarLinks"
                :key="link.label"
                :to="link.route"
                class="flex w-full max-w-60 items-center gap-3 rounded-lg p-4 text-primary-content"
                active-class="bg-primary !text-white"
                @click="handleNuxtLinkClick"
              >
                <component
                  :is="link.icon"
                  class="size-5"
                />
                <p class="font-semi-bold text-16">
                  {{ link.label }}
                </p>
              </NuxtLink>
              USER
            </nav>
            FOOTER
          </div>
        </ul>
      </div>
    </div>
    <!--     <Sheet>
      <SheetTrigger>
        <LucideMenu
          class="size-8 cursor-pointer"
          alt="menu"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        class="border-none bg-base-100"
      >

      </SheetContent>
    </Sheet> -->
  </div>
</template>

<script setup lang="ts">
import {
  LucideSendHorizontal,
  LucideHome,
  LucideCircleDollarSign,
  LucideScrollText,
} from "#components";
import type { User } from "~/types";

type Props = {
  user: User;
};

defineProps<Props>();

const sidebarLinks = [
  {
    icon: LucideHome,
    route: "/",
    label: "Home",
  },
  {
    icon: LucideCircleDollarSign,
    route: "/my-banks",
    label: "My Banks",
  },
  {
    icon: LucideScrollText,
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    icon: LucideSendHorizontal,
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];

const drawerToggle = ref<HTMLInputElement | null>(null);

const handleNuxtLinkClick = () => {
  drawerToggle.value?.click();
};
</script>

<style scoped></style>
