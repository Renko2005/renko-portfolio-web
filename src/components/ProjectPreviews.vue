<script setup>
import ProjectPreview from '@/components/ProjectPreview.vue'; 
import youtube_photo from '@/assets/youtube_homepage_clone.png'

const projects = [
  {
    title: 'Youtube clone',
    subtitle: 'A remake of the youtube homepage with plain html, css and a bit of javascript.',
    image: youtube_photo, 
    link: '/project/1'             
  },
  {
    title: 'Youtube clone',
    subtitle: 'A remake of the youtube homepage with plain html, css and a bit of javascript.',
    image: youtube_photo,
    link: '/project/2'
  },
  {
    title: 'Youtube clone',
    subtitle: 'A remake of the youtube homepage with plain html, css and a bit of javascript.',
    image: youtube_photo,
    link: '/project/3'
  }
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