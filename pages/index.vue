<template>
  <section
    class="HomePage flex w-full flex-row no-scrollbar max-xl:max-h-screen max-xl:overflow-y-scroll"
  >
    <div
      class="flex w-full flex-1 flex-col gap-8 px-5 py-7 no-scrollbar sm:px-8 lg:py-12 xl:max-h-screen xl:overflow-y-scroll"
    >
      <header class="flex flex-col justify-between gap-8">
        <BaseHeaderBox
          type="greeting"
          title="Welcome"
          :user="loggedIn?.firstName"
          subtext="Access and manage your account and transactions effectively."
        />
        <BaseTotalBalanceBox
          :accounts="[]"
          :total-banks="1"
          :total-current-balance="1250.35"
        />
      </header>
    </div>
  </section>
</template>

<script setup lang="ts">
const loggedIn = ref({ firstName: "Phillip" });
</script>

<style scoped></style>
