<template>
  <div id="toast"
    aria-live="polite"
    aria-atomic="true"
    class="bg-body-secondary position-relative bd-example-toasts rounded-3"
  >
    <div class="toast-container p-3" id="toastPlacement">
      <div class="toast">
        <div class="toast-header">
          <img src="..." class="rounded me-2" alt="..." />
          <strong class="me-auto">Aviso</strong>
        </div>
        <div class="toast-body">{{ toastMsg }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  toastMsg: String,
});

const toastMsg = ref(props);

</script>
