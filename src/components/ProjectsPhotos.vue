<script setup>
import ProjectPhoto from '@/components/ProjectPhoto.vue'; 
import youtube_photo from '/public/youtube_homepage_clone.png';
import vue_jobs_homepage from '/public/vue_jobs_homepage.png';
import browse_jobs from '/public/browse_jobs.png';
import view_job from '/public/view_job.png';
import edit_job from '/public/edit_job.png';
import added_job_succesfully from '/public/added_job_succesfully.png';
import add_job from '/public/add_job.png';

const projects = [
  {
    image: youtube_photo, 
    link: '/project/1'             
  },
  {
    image: vue_jobs_homepage,
    link: '/project/2'
  },
  {
    image: browse_jobs,
    link: '/project/3'
  },
  {
    image: view_job,
    link: '/project/3'
  },
  {
    image: edit_job,
    link: '/project/3'
  },
  {
    image: added_job_succesfully,
    link: '/project/3'
  },
  {
    image: add_job,
    link: '/project/3'
  }
];
</script>

<template>
  <section>
    <h1 class="title">Here are some photo's of different projects i have worked on</h1>
    <RouterLink
        to="/projects"
        class="subtitle-link"
        >Want to see more?<i class="pi pi-chevron-right" style="scale: 80%;"></i>
        </RouterLink>
  </section>
  <section class="projects-container">
    <ProjectPhoto
      v-for="(project, index) in projects"
      :key="index"
      :imageSrc="project.image"
      :linkTo="project.link"
    />
  </section>
</template>

<style scoped>
.projects-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-bottom: 10rem;
}
.title {
  font-size: 2rem; 
  font-weight: 400;
  color: var(--text-color);
  text-align: left;
  padding-left: 6rem;
  padding-right: 6rem;
}
.subtitle {
  margin-top: 1rem;
  margin-bottom: 1rem; 
  font-size: 1.5rem; 
  font-weight: 200;
  color: var(--text-color);
  text-align: left;
  padding-left: 6rem;
  padding-right: 6rem;
  padding-bottom: 1rem;
}
.subtitle-link {
  margin-top: 1rem;
  margin-bottom: 1rem; 
  font-size: 1.5rem; 
  font-weight: 200;
  padding-left: 6rem;
  padding-right: 6rem;
  padding-bottom: 1rem;
  text-align: left;
  text-decoration: none;
  color: var(--text-color);
  display: inline-flex; 
  align-items: center;
}
.subtitle-link i {
  opacity: 0;
  margin-left: 0.5rem;
  transition: 0.5s;
}

.subtitle-link:hover i {
  visibility: visible; 
  opacity: 1;
}
@media (max-width: 1024px) {
  .projects-container {
    grid-template-columns: 1fr;
  }
}
</style>
