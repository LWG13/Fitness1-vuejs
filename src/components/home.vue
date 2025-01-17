<script setup>
  import Banner from "./banner.vue"
  import Program from "./program.vue"
  import Reason from "./reason.vue"
  import Plan from "./plan.vue"
  import SayAbout from "./sayAbout.vue"
  import Footer from "./footer.vue"
</script>
<template>
<div class="homeGrid" >
 <div class="home">
  <Banner />
  <Program />
  <Reason/>
  <Plan />
  <SayAbout />
  <Footer />
 </div>
</div>
</template>
<style scoped>
  .homeGrid {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home{
    margin-top: 140px;
    width: 100%;
    height: auto;
  }
  @media only screen and (min-width: 1250px) {
   .home{
     width: 1250px;
   }
  }
</style>