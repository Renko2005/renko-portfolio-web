<script setup>
  import { RouterLink} from 'vue-router';
</script>
<template>
  <div class="social">
    <ul>
      <li><a href="https://github.com/Renko2005" target="_blank"> Github <i class="pi pi-github"></i></a></li>
      <li><a href="https://www.linkedin.com/in/renko-brauckman-9493682a5/" target="_blank"> LinkedIn <i class="pi pi-linkedin"></i></a></li>
    </ul>
  </div>
</template>

<style scoped>
  a {
    color: var(--text-color);
    text-decoration: none;
  }
  .social {
    position: fixed;
    top: 25%;
    width: 3rem;
  }
  .social ul {
    padding: 0px;
    -webkit-transform: translate(-270px, 0);
    -moz-transform: translate(-270px, 0);
    -ms-transform: translate(-270px, 0);
    -o-transform: translate(-270px, 0);
    transform: translate(-270px, 0);
  }
  .social ul li {
    display: block;
    margin: 5px;
    background: rgba(0, 0, 0, 0.36);
    width: 300px;
    text-align: right;
    padding: 10px;
    -webkit-border-radius: 0 30px 30px 0;
    -moz-border-radius: 0 30px 30px 0;
    border-radius: 0 30px 30px 0;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
  }
  .social ul li:hover {
    -webkit-transform: translate(110px, 0);
    -moz-transform: translate(110px, 0);
    -ms-transform: translate(110px, 0);
    -o-transform: translate(110px, 0);
    transform: translate(110px, 0);
    background: var(--sidebar-background-hover);
  }
  .social ul li:hover a {
    color: var(--text-color);
  }
  .social ul li:hover i {
    color: #fff;
    background: rgba(0, 0, 0, 0.36);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
  }
  .social ul li i {
    margin-left: 10px;
    color: #000;
    background: #fff;
    padding: 10px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 20px;
    background: #ffffff;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

</style>