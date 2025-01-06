<script setup>
  import { RouterView, RouterLink } from "vue-router"
  import logo from "./logo.png"
</script>

<template>
<div>
 <div class="grid" >
  <header class="navigation">
    <img :src="logo" alt="fitness" />
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <button class="btn"><a href="#">Join Us</a></button>
  </header>
 </div>
 <div class="view">
  <RouterView/>
 </div>
</div>
</template>

<style scoped>
  .btn {
    outline: none;
    border: 1px solid #fff;
    color: white;
    border-radius: 5px;
    padding: 10px;
    background-color: black;
    width: 100px;
    height: 40px;
  }
  .btn a {
    text-decoration: none;
    color: white;
  }
.navigation{
  width: 100%;
  background-color: black;
  color: white;
  height: 80px;
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  color: white;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.3s;
  z-index: 9999;
}
  .navigation img {
   width: 90px;
   padding: 10px;
  }
  .navigation ul {
    display: flex;
    list-style-type: none;
  }
  .navigation ul li {
    margin-left: 20px;
  }
  .navigation ul li a {
    text-decoration: none;
    color: white;
    padding: 5px;
  }
.grid{
  width: 100%;
  display: flex;
  height: 80px;
  background: black;
  top:0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 10000;
  justify-content: center;
  align-items: center;
}
.view {
  display: flex;
  justify-content: center;
  width: 100%;
}
  @media only screen and (min-width: 1250px) {
  .navigation{
    width: 1250px;
  }
  .outlet {
    width: 1250px;
  }

  }
  @media only screen and (max-width: 464px) {
    .btn{
      display: none;
    }
  }
</style>
