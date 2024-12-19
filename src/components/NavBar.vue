<script setup>
import { RouterLink, useRoute } from 'vue-router';
import cv_foto from '@/assets/cv_foto.jpg';
import { ref } from 'vue';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
};

</script>

<template>
  <div class="header">

    <div class="left-section">
      <img class="cv-foto" :src="cv_foto" alt="Profile Photo">
      <p class="dev_name">Renko Brauckman</p>
    </div>

    <div class="middle-section">
      <RouterLink
        to="/"
        :class="[isActiveLink('/') 
        ? 'active-page' 
        : 'inactive-page'
        ]"
        >Home</RouterLink
      >
      <RouterLink
        to="/projects"
        :class="[isActiveLink('/projects') 
        ? 'active-page' 
        : 'inactive-page'
        ]"
        >Projects</RouterLink
      >
      <RouterLink
        to="/resume"
        :class="[isActiveLink('/resume') 
        ? 'active-page' 
        : 'inactive-page'
        ]"
        >Resume</RouterLink
      >
      <RouterLink
        to="/contact"
        :class="[isActiveLink('/contact') 
        ? 'active-page' 
        : 'inactive-page'
        ]"
        >Contact</RouterLink
      >
    </div>

    <div class="right-section">
      <button @click="toggleTheme" class="theme-toggle-btn">
        <span class="theme-text">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
        <span class="short-text">Mode</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 5rem;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 1rem;
  left: 3rem;
  right: 3rem;
  z-index: 100;
  border: solid;
  border-radius: 2.5rem;
  border-width: 1px;
  box-shadow: var(--header-box-shadow);
  border-color: var(--header-border-color);
  color: var(--text-color);

  background-color: var(--header-bg);
}
.dev_name {
  font-family: Comic Sans MS, Comic Sans, cursive;
  margin-left: 1rem;
  font-weight: bold;
  font-size: 2rem;
  white-space: nowrap;
}
.left-section {
  align-items: center;
  display: flex;
}
.cv-foto {
  height: 3.6rem;
  width: 3.6rem;
  border-radius: 1.8rem;
  margin-left: 0.8rem;
}

.middle-section {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 25rem; 
  min-width: 0; 
  gap: 0.1rem; 
  margin-left: 0.4rem;
  margin-right: 0.4rem;
}

.right-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1.5rem;
  flex-shrink: 0;
}
.theme-toggle-btn {
  padding: 0.5rem 1rem;
  background-color: var(--button-bg);
  color: var(--button-text);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-left: auto;
  flex-shrink: 0;
}

.theme-toggle-btn:hover {
  opacity: 0.8;
}
.active-page, 
.inactive-page{
  width: 6rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  text-align: center; 
  line-height: 2rem;
  color: var(--text-color);
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s;
}
.active-page {
  text-decoration: underline;
  font-size: 1.5rem;
}
.active-page:hover, 
.inactive-page:hover{
  font-size: 1.5rem;
}
.short-text {
  display: none;
}
@media (max-width: 1200px) {
  .dev_name {
    display: none; 
  }
}
@media (max-width: 680px) {
  .theme-text {
    display: none; 
  }

  .short-text {
    display: inline-block; 
  }
}
</style>