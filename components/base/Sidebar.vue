<template>
  <section
    class="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]"
  >
    <nav class="flex flex-col gap-4">
      <NuxtLink
        to="/"
        class="mb-12 flex cursor-pointer items-center justify-center gap-2"
      >
        <LucideBitcoin class="size-10 text-primary" />
        <h1
          class="text-[26px] font-bold text-base-content max-xl:hidden 2xl:text-26"
        >
          PocketMoney
        </h1></NuxtLink
      >
      <NuxtLink
        v-for="link in sidebarLinks"
        :key="link.label"
        :to="link.route"
        class="flex items-center justify-center gap-3 rounded-lg py-1 text-primary-content md:p-3 xl:justify-start 2xl:p-4"
        active-class="bg-primary !text-white"
      >
        <component
          :is="link.icon"
          class="size-6"
        />
        <p class="text-nowrap font-semibold text-16 max-xl:hidden">
          {{ link.label }}
        </p>
      </NuxtLink>
      USER
    </nav>
    FOOTER
  </section>
</template>

<script setup lang="ts">
import {
  LucideSendHorizontal,
  LucideHome,
  LucideCircleDollarSign,
  LucideScrollText,
} from "#components";
import type { User, Transaction, Bank, Account } from "~/types";

type Props = {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
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
</script>

<style scoped></style>
