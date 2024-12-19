<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  linkTo: {
    type: String,
    required: true
  }
});
</script>

<template>
  <RouterLink :to="linkTo" class="project-photo-container">
    <img :src="imageSrc" alt="Project Image" class="project-photo" />
  </RouterLink>
</template>

<style scoped>
.project-photo-container {
  display: inline-block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--project-photo-box-shadow);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.project-photo-container:hover {
  transform: scale(1.05); 
}

.project-photo {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover; 
}
</style>