<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
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
  <div class="project-preview-container">
    <div class="project-info-container">
      <p class="title">
        {{ title }}
      </p>
      <p class="subtitle">
        {{ subtitle }}
      </p>
    </div>
    <div class="project-img-container">
      <img :src="imageSrc" alt="Project Image" class="project-photo" />
    </div>
  </div>
</template>

<style scoped>
.project-preview-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: var(--project-photo-box-shadow);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  margin-bottom: 4rem;
  border-radius: 1rem;
}
.project-preview-container:hover {
  transform: scale(1.05); 
}
.project-photo {
  margin: 1%;
  width: 98%; 
  height: auto; 
  border-radius: 1rem;
}
.title {
  color: var(--text-color);
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 0.5rem;
  font-size: 3rem;
  font-weight: 800;
  font-family: sans-serif;
  line-height: 1;
  text-align: left;
}
.subtitle {
  color: var(--text-color);
  padding-left: 2rem;
  padding-bottom: 2rem;
  padding-right: 2rem;
  font-size: 2rem;
  font-family: sans-serif;
  text-align: left;
}
@media (max-width: 1024px) {
  .project-preview-container {
    grid-template-columns: 1fr;
  }
}
</style>