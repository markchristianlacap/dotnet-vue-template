<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="un-grid un-place-items-center un-h-screen">
          <div>
            <RouterView />
            <q-btn color="primary" flat @click="router.back()">
              Go Back
            </q-btn>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
