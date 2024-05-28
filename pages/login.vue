<template>
  <div class="LoginPage h-screen w-full bg-base-300">
    <div class="pt-20">
      <div class="card card-compact mx-auto max-w-96 bg-base-100 shadow-lg">
        <form
          v-if="!isEmailSend"
          type="submit"
          @submit.prevent="signIn"
        >
          <div class="card-body">
            <div class="card-title">Log in to your account</div>
            <p class="mb-4">
              You'll receive an email with a one-time link to access your
              account—no registration needed. If you don't see the email, check
              your spam or junk folder.
            </p>
            <label class="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-4 opacity-70"
              >
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                />
              </svg>
              <input
                v-model="email"
                required
                type="email"
                class="grow"
                placeholder="Email"
                :disabled="isLoading"
              />
            </label>
            <div class="card-action">
              <button
                type="submit"
                class="btn btn-primary w-full"
                :disabled="isLoading"
              >
                Send login link
                <span
                  v-if="isLoading"
                  class="loading loading-spinner"
                ></span>
              </button>
            </div>
          </div>
        </form>
        <div
          v-else
          class="card-body"
        >
          <div class="card-title">Check your email</div>
          <p>
            We emailed a magic link to {{ email }}. Click the link to log in or
            sign up.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const email = ref("");
const isEmailSend = ref(false);
const isLoading = ref(false);

definePageMeta({
  layout: "guest-layout",
});

const signIn = async () => {
  isLoading.value = true;
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
  });
  isLoading.value = false;
  if (!error) {
    isEmailSend.value = true;
  }
};
</script>

<style scoped></style>
