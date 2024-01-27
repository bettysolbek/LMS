<!-- YourComponent.vue -->
<template>
  <div>
    <quill-editor v-model="content" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
    };
  },
};
</script>
