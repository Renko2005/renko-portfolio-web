<script setup>
const copyToClipboard = (type) => {
  let textToCopy = '';
  
  if (type === 'email') {
    textToCopy = 'renkob2005@gmail.com';
  } else if (type === 'phone') {
    textToCopy = '06-50455326';
  }
  
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert(`${type.charAt(0).toUpperCase() + type.slice(1)} copied to clipboard!`);
  }).catch(err => {
    console.error('Error copying text: ', err);
  });
};
</script>

<template>
  <div class="contact-me-container">
    <p class="title">Contact me</p>
    <div class="contact-container">
      <div class="email-icon">
        <i class="pi pi-envelope"></i>
      </div>
      <p class="email" @click="copyToClipboard('email')">renkob2005@gmail.com</p>
    </div>
    <div class="contact-container">
      <div class="email-icon">
        <i class="pi pi-phone"></i>
      </div>
      <p class="phone" @click="copyToClipboard('phone')">06-50455326</p>
    </div>
  </div>
  
</template>

<style scoped>
  .contact-me-container {
    text-align: center;
  }
  
  .title {
  margin-top: 5rem;
  font-size: 4rem; 
  font-weight: 600;
  color: var(--text-color);
  text-align: center;
  padding-left: 6rem;
  padding-right: 6rem;
  font-family: sans-serif;
  }
  .pi-phone,
  .pi-envelope{
    margin-top: 5rem;
    color: var(--text-color);
    scale: 400%;
  }
  .email-icon {
    display: inline-block;
  }
  .phone,
  .email {
    display: inline-block;
    font-size: 2rem;
    color: var(--text-color);
    width: 15rem;
    text-align: left;
    margin-left: 2rem;
    cursor: pointer;
  }
  .contact-container {
    margin-bottom: 2rem;
  }

</style>