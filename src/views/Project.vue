<script setup>
  import { useRoute } from 'vue-router';
  import youtube_photo from '/public/youtube_homepage_clone.png';
  import vue_jobs_homepage from '/public/vue_jobs_homepage.png';

  const route = useRoute();
  const projectId = route.params.id;

  const projects = [
    {
      id: 'youtube',
      title: 'Youtube Clone',
      description: 'A remake of the YouTube homepage using HTML, CSS, and a bit of JavaScript. With this project I learned alot about flexboxes, grids and absolute and relative elements. I also worked alot with tooltips and transitions to make everything look smooth and learned how to use @media for an extra responsive design. ',
      image: youtube_photo,
      github: 'https://github.com/Renko2005/youtube_clone',
      website: 'https://renko2005.github.io/youtube_clone/'
    },
    {
      id: 'vue-jobs',
      title: 'vue-jobs',
      description: `This is the first website I made using the vue-framework. With this project I learned all about using v-directives, forms, api\'s, the vue router, ref and reactive value and so much more.the webpage has a home page with a hero(sorft of welcome coponent), 2 homecards to direct different kinds of clients to the right page and some limited amount of jobs. from that page you can go to either the jobs page to browse more, or you can add, edit or delete some jobs. Unfortunately I can't put the website online because the backend runs a local json server for the job information. which is not compatible for a deployment.`,
      image: vue_jobs_homepage,
      github: 'https://github.com/Renko2005/vue-jobs',
      website: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: '3',
      title: 'Project 3',
      description: 'Another interesting project.',
      image: '/path/to/project-3-image.png',
    },
  ];

  const project = projects.find(p => p.id === projectId)
</script>
<template>
  <div class="project-container">
    <div class="intro-container">
      <p class="title">{{ project.title }}</p>
      <div class="description-photo-container">
        <div>
          <p class="description">{{ project.description }}</p>
          <a :href="project.github" target="_blank"><span class="normal-github">Github repository <i class="pi pi-github"></i></span><span class="short-github-text">Github <i class="pi pi-github"></i></span></a>
          <a :href="project.website" target="_blank">Website <i class="pi pi-globe"></i></a>
        </div>
        <img :src="project.image" alt="Project Image" class="project-photo"/>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
  p {
    font-family: sans-serif;
  }
  .project-container{
    padding: 5rem;
  }
  .title{
    text-align: center;
    font-size: 5rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 2rem;
  }
  .description {
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  .description-photo-container{
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .project-photo{
    width: 100%;
    height: auto;
  }
  a {
    display: inline-block;
    background-color: var(--text-color);
    color: var(--background-color);
    font-size: 1.5rem;
    text-decoration: none;
    padding: 1rem;
    border-radius: 2rem;
    margin: 1rem;
    transition: 0.5s;
  }
  a:hover{
    transform: scale(1.05);
  }
  .short-github-text{
    display: none;
  }
  @media (max-width: 1024px) {
    .short-github-text {
      display: inline-block;
    }
    .normal-github{
      display: none;
    }
    .description-photo-container {
      grid-template-columns: 1fr;
    }
    .description-photo-container img {
      order: -1; 
    }
  }
</style>