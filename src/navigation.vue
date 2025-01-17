


<script setup>
import logo from "./logo.png"
import { ref } from 'vue';
import { RouterLink } from "vue-router"
import menu from "./menu.png"
const options = ["Home", "Contact"];
const selectedOption = ref(null);
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
};
</script>

<template>
<div>
 <div class="grid" >
  <header class="navigation">
    <img :src="logo" alt="fitness" />
    <ul>
      <li><RouterLink to="/" >Home</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
    <button class="btn"><a href="#">Join Us</a></button>

  <div class="dropdown">
  <div class="menu">
    <img :src="menu" @click="toggleDropdown"  />
  </div>
    <div :class="{'dropdownmenu active': isOpen === true, 'dropdownmenu deactive': isOpen === false}">
      <li 
      @click="selectOption('Home')"
        :class="{'dropdown-item isOn': selectedOption === 'Home',  'dropdown-item': selectedOption != 'Home'}"
      >
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li 
      @click="selectOption('Contact')"
        :class="{'dropdown-item isOn': selectedOption === 'Contact', 'dropdown-item': selectedOption != 'Contact'}"
      >
        <a href="#">Contact</a>
      </li>
    </div>
  </div>
  </header>
 </div>
  <RouterView />
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
html{
  scroll-behavior: smooth;

}
body{
  font-weight: 400;
  background-color: #211e1e;
  color: #fff !important;
  font-family: "Centra", sans-serif !important;
}
  .dropdown-btn {
    outline: none;
    border: 1px solid #fff;
    color: white;
    border-radius: 5px;
    padding: 10px;
    background-color: black;
    width: 120px;
    height: 50px;
  }
  .dropdown-btn:hover {
    background: white;
    color: black;
  }
  .dropdown-btn a {
    text-decoration: none;
    color: white;
  }
.navigation{
  width: 100%;
  background-color: black;
  color: white;
  height: 120px;
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
  font-family: "Centra", sans-serif !important;
}
  .navigation img {
   width: 170px;
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
    font-family: "Centra", sans-serif !important;
  }
  .dropdown {
  position: relative;
  display: inline-block;
}
.dropdown .menu{
  width: 150px;
}
.dropdown .menu img {
  width: 60px;
  float: right;
}
.dropdown-button {
  padding: 10px 20px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}

.dropdownmenu {
  position: absolute;
  top: 100%;
  left: 0;
  float: right;
  list-style-type: none;
  margin-top: 10px;
  width: 100%;
  padding: 0;
  background-color: black;
  color: white;
  border: 1px solid #ddd;

  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.dropdownmenu.active {
  visibility: visible;
  opacity: 1;
  transition: 0.5s;
  transform: translateY(0);
}
.dropdownmenu.deactive{
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
  transform: translateY(-20px);
}
.dropdown-item {
  padding: 10px;
  cursor: pointer;
}
.dropdown-item.isOn {
  background-color: gray;
  padding : 10px;
}
.dropdown-item:hover {
  background-color: #f5f5f5;
}
.dropdown-item a{
  text-decoration: none;
  color: white;
}
.grid{
  width: 100%;
  display: flex;
  height: 120px;
  background: black;
  top:0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 10000;
  justify-content: center;
  align-items: center;
}
.btn {
 width: 160px;
 height: 50px;
 background: black;
 border: 1px solid #fff;
 color: white;
 border-radius: 5px;
}
.btn a {
  text-decoration: none;
  color: white
}
.btn:hover{
  color: black;
  background: white;
  transition: 0.4s;
}
.btn a:hover{
  color: black;
}
.view {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #211e1e !important;
}
  @media only screen and (min-width: 1250px) {
  .navigation{
    width: 1250px;
  }

  }
  @media only screen and (min-width: 464px) {
    .dropdown {
      display: none;
    }
  }
  @media only screen and (max-width: 464px) {
    .btn{
      display: none;
    }
    .navigation ul li a, .navigation ul li, .navigation ul{
      display: none;
    }
  }
</style>
