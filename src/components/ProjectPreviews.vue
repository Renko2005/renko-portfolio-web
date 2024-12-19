<script setup>
import ProjectPreview from '@/components/ProjectPreview.vue'; 
import youtube_photo from '/public/youtube_homepage_clone.png';
import vue_jobs_homepage from '/public/vue_jobs_homepage.png';

const projects = [
  {
    title: 'Youtube clone',
    subtitle: 'A remake of the youtube homepage with plain html, css and a bit of javascript.',
    image: youtube_photo, 
    link: '/projects/youtube'             
  },
  {
    title: 'Vue jobs',
    subtitle: 'My first completed vue-website. Here i learned all the basics you need to develop a working vue-website.',
    image: vue_jobs_homepage,
    link: '/projects/vue-jobs'
  },
];
</script>

<template>
  <section class="projects-container">
    <ProjectPreview
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :subtitle="project.subtitle"
      :imageSrc="project.image"
      :linkTo="project.link"
    />
  </section>
</template>

<style scoped>
.projects-container {
  padding: 5rem;
}
</style>