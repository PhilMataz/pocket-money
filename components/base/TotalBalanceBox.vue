<template>
  <section
    class="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6"
  >
    <div class="flex size-full max-w-[100px] items-center sm:max-w-[120px]">
      <Doughnut
        :data="data"
        :options="{
          cutout: '60%',
          plugins: {
            legend: {
              display: false,
            },
          },
        }"
      />
    </div>
    <div class="flex flex-col gap-6">
      <h2 class="font-semibold text-gray-900 text-18">
        Bank Accounts: {{ totalBanks }}
      </h2>
      <div class="flex flex-col gap-2">
        <p class="font-medium text-gray-600 text-14">Total Current Balance</p>
        <p
          class="flex flex-1 items-center justify-center gap-2 font-semibold text-gray-900 text-24 lg:text-30"
        >
          <ClientOnly>
            <CountUp
              :end-val="totalCurrentBalance"
              :options="{
                suffix: '€',
                decimalPlaces: 2,
                decimal: ',',
                separator: '.',
                duration: 1,
              }"
            />
          </ClientOnly>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CountUp from "vue-countup-v3";
import { Doughnut } from "vue-chartjs";
import type { Account } from "~/types";

import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Legend, Tooltip);

type Props = {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
};

defineProps<Props>();

const data = {
  labels: ["Bank 1", "Bank 2", "Bank 3"],
  datasets: [
    {
      label: "My Accounts",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
</script>

<style scoped></style>
