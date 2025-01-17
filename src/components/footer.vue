<script setup>
  import logo from "../logo.png"
</script>
<template>
  <div class="footer" >
    <img :src="logo" alt="fitness1"/>
    <br/>
    <p>Phone Number: +1900 472 940</p>
    <p>Address: Binh Thanh district</p>
    <p>Email: fitness1h@gmail.com</p>
    <p>Time: 7am - 21pm</p>
    <br/><br/>
    <p class="copyright">Copyright 2025© by LWG13</p>
  </div>
</template>
<style scoped>
  @font-face {
  font-family: Centra;
  src: url("../centra.ttf");
  font-weight: 700;
}
@font-face {
  font-family: Centra;
  src: url("../centraMedium.ttf");
  font-weight: 500;
}
@font-face {
  font-family: Centra;
  src: url("../centraBook.ttf");
  font-weight: 400;
}
  .footer {
    background: #8F00FF;
    color: white;
    font-family: Centra;
    padding-top: 40px;
    margin-top: 120px;
    padding-left: 15px;
    padding-right: 15px;
    
    height: 340px;
  }
.footer img {
  width: 150px;
}
  .footer h1 {
    font-size: 43px;
  }
  .copyright{
    text-align: center;
    font-size: 28px;
  }
  .footer p {
    font-size: 20px;
  }
</style>