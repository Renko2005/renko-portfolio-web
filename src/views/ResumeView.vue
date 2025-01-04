<script setup>
  const renko_cv = "/renko_cv.png";
</script>
<template>
  <section class="resume-container">
    <h1 class="title">My Resume</h1>
    <div class="cv-image-container">
      <img
        :src="renko_cv"
        alt="My Resume"
        class="cv-image"
      />
      <a
        href="renko_cv.pdf"
        download="Renko_Brauckman_Resume.pdf"
        class="download-btn"
      >
        <i class="pi pi-file-import"></i>
      </a>
    </div>

  </section>
</template>


<style scoped>
.resume-container {
  text-align: center;
  padding: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: 400;
  color: var(--text-color);
}

.cv-image-container {
  max-width: 60%; 
  position: relative;
  display: inline-block;
}

.cv-image {
  margin-top: 2rem;
  max-width: 100%; 
  height: auto;
  border-radius: 1rem;
  box-shadow: var(--project-photo-box-shadow);
}
.download-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s;
}

.download-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.download-btn {
  position: absolute;
  top: 3rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 2rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.5s;
}
.download-btn i {
  scale: 300%;
}

.download-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

@media (max-width: 1024px) {
  .download-btn i {
    scale: 200%
  }
  .download-btn {
    padding: 1.4rem;
  }
  .cv-image-container {
  max-width: 70%;
  }
}

@media (max-width: 768px) {
  .download-btn i {
    scale: 150%
  }
  .download-btn {
    padding: 1rem;
  }
  .cv-image-container {
  max-width: 80%;
  }
}


</style>

