<template>
  <div class="flex flex-col gap-1">
    <h1 class="font-semibold text-base-content text-24 lg:text-30">
      {{ title
      }}<span
        v-if="type === 'greeting'"
        class="text-primary"
        >&nbsp;{{ user }}</span
      >
    </h1>
    <p class="font-normal text-gray-600 text-14 lg:text-16">{{ subtext }}</p>
  </div>
</template>

<script setup lang="ts">
type Props = {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
};

withDefaults(defineProps<Props>(), {
  type: "title",
  user: "Guest",
});
</script>

<style scoped></style>
