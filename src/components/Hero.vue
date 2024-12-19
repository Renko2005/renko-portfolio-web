<script setup>
  import { defineProps } from 'vue';

  defineProps({
    Title: {
      type: String,
      default: 'Hello I\'m Renko Brauckman'
    },
    Subtitle: {
      type: String,
      default: 'I\'m a frontend developer studying at The Hague University of Applied Sciences'
    },
    Subtitle2: {
      type: String,
      default: 'I have great experience with CSS, HTML and Javascript'
    }
  });
</script>

<template>
  <section class="hero">
          <h1 class="title">
            Hello I'm Renko Brauckman
          </h1>
          <p class="subtitle">
            I'm a frontend developer studying at The Hague University of Applied Sciences
          </p>
          <p class="subtitle2">
            I have great experience with
            <span class="skill">CSS</span>,
            <span class="skill">HTML</span>, 
            <span class="skill">Javascript</span> and the 
            <span class="skill">Vue-framework</span>
          </p>
    </section>
</template>

<style scoped>
.hero {
  padding-top: 5rem; 
  padding-bottom: 4rem; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 5rem; 
  font-weight: 800; 
  color: var(--text-color);
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
}

.subtitle {
  margin-top: 2rem; 
  margin-bottom: 1rem; 
  font-size: 1.8rem; 
  color: var(--text-color);
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
}
.subtitle2 {
  margin-top: 1rem; 
  margin-bottom: 1rem; 
  font-size: 1.4rem; 
  color: var(--text-color);
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
}
.skill {
  font-weight: bolder;
}
</style>

