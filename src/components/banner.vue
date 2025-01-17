<script setup>
 import gym from "./gym.png"
 import heartRate from "./heartRate.png"
 import calo from "./calo.png"
</script>
<template>
  <div class="banner">
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" xxl="6" class="pa-0">
          <div class="banner-left">
            <div class="title">
              <p >THE BEST FITNESS IN THE CITY!</p>
            </div>
            <br/>
            <span class="homeName"><b class="bold">TRAIN</b>   YOUR</span>
          
            <span class="homeName">
             IDEAL BODY
            </span>
            <p class="intro">In here we have service to help you archive your ideal body and have a good and experience support for your fitness and healthy.</p>
            <div class="info">
              <div class="info-detail">
                <h2>+ 123</h2>
                <span>EXPERT</span><span>COACHES</span>
              </div>
              <div class="info-detail">
                <h2>+ 1308</h2>
                <span>MEMBERS</span><span>  JOINED</span>
              </div>
              <div class="info-detail">
                <h2>+ 29</h2>
                <span>PROGRAM</span>
              </div>
            </div>
            <button class="btn-start">Contact Us</button>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6" class="pa-0">
          <div class="banner-right">
            <img :src="heartRate" alt="heat rate" class="heart" />
            <img :src="gym" alt="gym" class="gym"/>
            <img :src="calo" alt="calo" class="calo" />
          </div>
        </v-col>
      </v-row>
    </v-container>
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
  
  .title{
    width: 100%;
    height: auto;
    font-size: 15px;
    padding: 10px;
    font-weight: 450;
    border-radius: 5px;
    background: #8F00FF;
    font-family: Centra;
    
  }
  .intro{
    font-family: Centra;
  }
 .btn-start{
    width: 180px;
    height: 50px; 
    font-family: Centra;
    background: #8F00FF;
    color: white;
    border-radius: 5px;
  }
  .btn-start:hover {
    background: #211e1e;
    color: white;
    border: 1px solid #8F00FF;
  }
  .banner {
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    animation: gym1 1.5s;
    padding: 5px;
  }
  .info {
    display: flex;
    margin-top: 30px;
    padding-bottom: 30px;
  }
  .info-detail{
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 100%;
  }
  .info-detail span{
    color: gray;
  }
  .bold{
    font-size: 42px;
    color: #8F00FF;
    font-family: Centra;
  }
  .homeName {
   font-size: 42px;
   margin-left: 5px;
   font-weight: 500;
   font-family: Centra;
  }
  .banner-left{
    width: 98%;
    height: auto;
    background: #211e1e;
    display: flex;
    padding: 15px;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
  }
  .banner-right{
    width: 98%;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    height: 540px;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: #8F00FF;
    display: flex;
    
  }
  .banner-right .gym {
     width: 90%;
     height: 500px;
     animation: gym1 1.5s;
     animation: toggle 3.5s infinite;
  }
  .banner-right .heart{
    width: 100px;
    height: 100px;
    position: relative;
    top: -160px;
    right: -115px;
    border-radius: 10px;
    animation: toggle 3.5s infinite;
  
  }
  .banner-right .calo {
    width: 150px;
    height: 100px;
    position: relative;
    top: 100px;
    border-radius: 10px;
    right: 120px;
    animation: toggle 3.5s infinite;
  }
  @keyframes toggle {
   0% {
    margin-left: 8px;
    margin-top: 8px;
   }
   33%{
     magin-right: 8px;
     margin-bottom: 8px;
   }
   66% {
    margin-bottom: 8px;
    margin-right: 8px;
   }
   100%{
     margin-left: 8px;
     margin-top: 8px;
   }
  }
  @keyframes opacity1 {
   0%{
     opacity: 0;
   }
   100%{
    opacity: 1;
   }
  }
  @keyframes gym1 {
    0%{
      opacity: 0;
      margin-top: 180px;
    }
    100%{
      opacity: 1;
      margin-top: 0;
    }
  }
  @media only screen and (max-width: 464px) {
    .banner {
      flex-direction: column;
    }
  }
</style>