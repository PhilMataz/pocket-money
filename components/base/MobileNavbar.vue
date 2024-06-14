<template>
  <div>MobileNavbar</div>
</template>

<script setup lang="ts">
import type { User } from "~/types";

type Props = {
  user: User;
};

defineProps<Props>();
</script>

<style scoped></style>
